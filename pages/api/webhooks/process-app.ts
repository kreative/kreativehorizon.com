import { NextApiRequest, NextApiResponse } from "next";
import MailerLite from "@mailerlite/mailerlite-nodejs";
import logger from "@/lib/logger";

const mailerlite = new MailerLite({
  api_key: process.env.MAILERLITE_TOKEN!,
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  logger.info("Lead request initiated", { req });
  const event = req.body.form_response.hidden.event;
  const email = req.body.form_response.hidden.email;

  mailerlite.groups
    .get({
      limit: 25,
      page: 1,
      filter: {
        // @ts-ignore
        name: event + "-applicants",
      },
      sort: "-name",
    })
    .then((response) => {
      console.log(response);
      const groupId = response.data.data[0].id;
      logger.info("retrieved groups from MailerLite", { req, response });

      // update phone number field if possible

      mailerlite.subscribers
        .createOrUpdate({
          email,
          groups: [groupId.toString()],
        })
        .then((addResponse) => {
          console.log(addResponse);
          logger.info("added subscriber to MailerLite", { req, addResponse });
          return res.status(200).send("Completed.");
        })
        .catch((addError) => {
          // we need to notify the business that the lead was not collected and to fix this
          console.log(addError);
          logger.error("error adding subscriber to MailerLite", {
            req,
            addError,
          });
          return res.status(500).send({ message: "error", error: addError });
        });
    })
    .catch((error) => {
      // we need to notify the business that the lead was not collected and to fix this
      console.log(error);
      logger.error("error retrieving groups from MailerLite", { req, error });
      return res.status(500).send({ message: "error", error });
    });
}
