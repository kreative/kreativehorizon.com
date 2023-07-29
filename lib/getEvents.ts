import { createClient, groq } from "next-sanity";
import Event from "../types/Events";

export async function getEvents(): Promise<Event[]> {
  const client = createClient({
    dataset: "production",
    apiVersion: "2021-03-25",
    projectId: "laarr84g",
  });

  return client.fetch(
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
}
