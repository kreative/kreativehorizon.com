import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { motion } from "framer-motion";

export default function FloatingCTA2({
  label,
  title,
  description,
  btnLabel,
  btnLink,
  btnTarget,
  imageSrc,
  imageAlt,
}: {
  label: string;
  title: string;
  description: string;
  btnLabel: string;
  btnLink: string;
  btnTarget?: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <Container>
      <div className="bg-horizon-grey-200 rounded-3xl p-16">
        <div className="grid grid-cols-12 gap-0 ">
          <div className="col-span-12 sm:col-span-7 flex flex-col justify-center space-y-2">
            <p className="text-2xl tracking-wide font-guthen">{label}</p>
            <h1 className="text-5xl md:text-6xl font-chedros text-left">
              {title}
            </h1>
            <p className="text-base text-horizon-grey-600 pb-6">
              {description}
            </p>
            <div className="flex justify-start items-center">
              <motion.div
                whileHover={{ scale: 0.97, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={btnLink}
                  className="rounded-md py-2.5 px-5 font-bold bg-horizon-pink text-white shadow-md"
                  target={btnTarget}
                >
                  {btnLabel}
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-1" />
          <div className="col-span-12 sm:col-span-4 flex justify-end items-center">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={500}
              className="-mt-10 sm:m-0 w-[60%] sm:w-full h-auto"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
