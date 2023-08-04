import { groq } from "next-sanity";
import sanityClient from "./sanityClient";
import StudentReview from "../types/StudentReview";

const getStudentReviews = async (): Promise<StudentReview[]> => {
  try {
    // Fetch the StudentReviews using the defined query
    const studentReviews = await sanityClient.fetch(
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
      `
    );
    return studentReviews;
  } catch (error) {
    console.error('Error fetching student reviews:', error);
    return [];
  }
};

export default getStudentReviews;