import { NextApiRequest, NextApiResponse } from "next";
import MailerLite from '@mailerlite/mailerlite-nodejs';
import logger from "@/lib/logger";

const mailerlite = new MailerLite({
  api_key: process.env.MAILERLITE_TOKEN!,
})

interface LeadRequest extends NextApiRequest {
  body: {
    email?: string;
    fullName?: string;
    botField?: string;
  };
}

export default function handler(req: LeadRequest, res: NextApiResponse) {
  logger.info("Lead request initiated", { req });

  if (req.method !== "POST") {
    logger.warn("Lead request method not allowed", { req });
    res.status(405).send("Method not allowed");
    return;
  }

  if (!req.body.email || !req.body.fullName) {
    logger.warn("Lead request missing email or full name", { req });
    res.status(400).send("Email and Full Name are required");
    return;
  }

  if (req.body.botField !== "") {
    logger.warn("Lead request bot field not empty", { req });
    res.status(400).send("Bot field must be empty");
    return;
  }

  if (req.query.event === "") {
    logger.warn("Lead request missing event", { req });
    res.status(400).send("Event is required");
    return;
  }

  const event = req.query.event;
  const email = req.body.email;
  const fullName = req.body.fullName;
  const firstName = fullName!.split(" ")[0];
  const lastName = fullName!.split(" ")[fullName!.split(" ").length - 1];

  // add a new subscriber into MailerLite with the correct group
  const newsletterGroupId: number = 96632678153979799;

  logger.info("getting list of groups from MailerLite", { req });

  mailerlite.groups.get({
    limit: 25,
    page: 1,
    filter: {
      // @ts-ignore
      name: event + "-leads"
    },
    sort: "-name",
  })
      .then(response => {
        const groupId = response.data.data[0].id;
        logger.info("retrieved groups from MailerLite", { req, response });
        mailerlite.subscribers.createOrUpdate({
          email,
          fields: {
            name: firstName,
            last_name: lastName,
          },
          groups: [groupId.toString(), "96632678153979799"], // second string is for 'KHZ Newsletter'
          status: "active",
        })
            .then((addResponse) => {
              logger.info("added subscriber to MailerLite", { req, addResponse });
            })
            .catch((addError) => {
              // we need to notify the business that the lead was not collected and to fix this
              logger.error("error adding subscriber to MailerLite", { req, addError });
            });
      })
      .catch(error => {
        // we need to notify the business that the lead was not collected and to fix this
        logger.error("error retrieving groups from MailerLite", { req, error });
      });



  return res.redirect(`/events/${event}?lead_success=true`);
}
