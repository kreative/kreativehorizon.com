import { groq } from "next-sanity";
import sanityClient from "./sanityClient";
import EventCardType from "../types/EventCard";

const getLatestEvents = async (): Promise<EventCardType[]> => {
  try {
    // Fetch the StudentReviews using the defined query
    const events = await sanityClient.fetch(
      groq`*[ _type == "event" ] | order(start_datetime asc)[0..2] {
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

export default getLatestEvents;
