import { groq } from "next-sanity";
import sanityClient from "./sanityClient";
import EventCardType from "../types/EventCard";

const getLatestEvents = async (excludeSlug?: string): Promise<EventCardType[]> => {
  try {
    let events: EventCardType[];

    if (excludeSlug) {
      events = await sanityClient.fetch(
        groq`*[ _type == "event" && slug != "${excludeSlug}" && start_datetime > now()] | order(start_datetime asc)[0..2] {
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
      `
      );
      console.log('events', events)
    } else {
      events = await sanityClient.fetch(
        groq`*[ _type == "event" && start_datetime > now() ] | order(start_datetime asc)[0..2] {
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
      `
      );
    }
    return events;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};

export default getLatestEvents;