import Link from "next/link";
import Event from "@/types/Events";
import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";

export default function EventCard({ event }: { event: Event }) {
  return (
    <div>
      <Link href={`/events/${event.slug}`}>
        <motion.div
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.97 }}
          className="p-4 border border-horizon-grey-300 rounded-2xl drop-shadow-2xl flex flex-col items-stretch"
        >
          <div>
            <CldImage
              src={`kreativehorizon.com/events/${event.cld_id}`}
              alt={event.alt}
              className="w-full h-auto"
              width="760"
              height="460"
            />
            <h3 className="text-6xl md:text-5xl lg:text-4xl font-chedros mt-6 mb-2">
              {event.title}
            </h3>
            <p className="text-3xl md:text-xl text-horizon-grey-600">
              {event.tagline}
            </p>
          </div>
          <p className="text-2xl md:text-xl mt-4">
            <span className="font-bold">{event.date_label}</span> @{" "}
            {event.location}
          </p>
        </motion.div>
      </Link>
    </div>
  );
}
