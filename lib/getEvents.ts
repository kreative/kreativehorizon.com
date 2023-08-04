import { groq } from "next-sanity";
import sanityClient from "./sanityClient";
import Event from "../types/Events";

const getEvents = async (): Promise<Event[]> => {
  try {
    // Fetch the StudentReviews using the defined query
    const events = await sanityClient.fetch(
      groq`*[ _type == "event" ] | order(start_datetime asc) {
        _id,
        _createdAt,
        title,
        tagline,
        season,
        year,
        start_datetime,
        end_datetime,
        date_label,
        location,
        slug,
        cld_id,
        alt,
      }
      `,
    );
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export default getEvents;
