import { createClient, groq } from "next-sanity";
import StudentReview from "../types/StudentReview";

export async function getStudentReviews(): Promise<StudentReview[]> {
  const client = createClient({
    dataset: "production",
    apiVersion: "2021-03-25",
    projectId: "laarr84g",
  });

  return client.fetch(
    groq`*[ _type == "testimonial" && type == "student" ]{
      _id,
      _createdAt,
      fullName,
      organization,
      rating,
      "photo": photo.asset->url,
      "avatar": avatar.asset->url,
      testimonial,
    }
    `,
  );
}
