import StudentReview from "@/types/StudentReview";
import Star from "@/components/Star";

export default function TestimonialCard({ review }: { review: StudentReview }) {
  return (
    <div className="px-8 py-10 rounded-2xl bg-horizon-grey-100 flex flex-col space-y-3 justify-start items-start">
      <div className="flex justify-start items-center space-x-2">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <p className="text-xl text-horizon-grey-800 py-2">{review.testimonial}</p>
      <div>
        <p className="text-2xl font-chedros text-horizon-purple">
          {review.fullName}
        </p>
        <p className="text-[1.40rem] font-chedros text-horizon-grey-600">
          {review.organization}
        </p>
      </div>
    </div>
  );
}
