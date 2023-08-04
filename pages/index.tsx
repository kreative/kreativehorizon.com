import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogoCloud1 from "@/components/LogoCloud1";
import LogoCloud6 from "@/components/LogoCloud6";
import Container from "../components/Container";
import SplashContainer from "@/components/SplashContainer";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import EventCard from "@/components/EventCard";
import FloatingCTA3 from "@/components/FloatingCTA3";
import Event from "@/types/Events";
import getLatestEvents from "@/lib/getLatestEvents";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

export default function Home({ events }: { events: Event[] }) {
  return (
    <div>
      <NextSeo
        title="Home"
        description="Kreative Horizon aims to empower students with the resources and opportunities to learn, build, and grow through hackathons, workshops, and more."
      />
      <Navbar />
      <main>
        <SplashContainer>
          <div className="py-6 relative flex items-center justify-center h-screen mb-12 overflow-hidden">
            <div className="z-30">
              <Container>
                <div className="flex flex-col space-y-4 items-center justify-center">
                  <p className="font-guthen tracking-wide text-2xl text-white">
                    Welcome Dreamer
                  </p>
                  <h1 className="font-chedros text-6xl md:text-7xl font-bold text-white text-center">
                    Hackathons, workshops, and more, so you can go beyond the
                    horizon.
                  </h1>
                  <div className="flex flex-col xs:flex-row items-center ustify-center space-y-8 xs:space-y-0 xs:space-x-3 pt-3 sm:p-0">
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-white text-horizon-grey-800 border border-white grow"
                        href="/events"
                      >
                        See events
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-transparent text-white border border-white grow"
                        href="/get-involved"
                      >
                        Get involved
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </Container>
            </div>
            <video
              autoPlay
              loop
              muted
              className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            >
              <source
                src="https://res.cloudinary.com/dlazo25rt/video/upload/v1690682879/kreativehorizon.com/mixkit-traveling-between-the-stars-and-nebulae-14151-medium_sqww94.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </SplashContainer>
        <div className="py-12 lg:py-20">
          <LogoCloud1 />
        </div>
        <Container>
          <div className="py-20 grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <p className="text-2xl tracking-wide font-guthen mb-4">
                Our mission
              </p>
              <h2 className="text-5xl font-chedros">
                We&apos;re on a mission to give students the tools to build the
                future of tomorrow, today.
              </h2>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-lg text-horizon-grey-700 pt-8">
                When we started Kreative Horizon back in 2019, we had one goal:
                run a fantastic hackathon for the students of Chicago. Since
                then, we have been expanding the reach of our events with the
                hopes of serving the whole midwest, and eventually the nation.
                We believe that events like hackathons, pitch competitions, and
                design jams give students the chance to try out their classroom
                skills in the real world. Plus, they get to network with other
                students on their campus or area, make new friends, connect with
                sponsors (that are looking to hire 👀), and have a great time.
              </p>
              <div className="flex justify-start items-center space-x-10 max-w-[75%] mt-8">
                <div className="">
                  <p className="text-6xl sm:text-8xl font-chedros">154</p>
                  <p className="text-xl font-guthen text-horizon-grey-600">
                    Students empowered
                  </p>
                </div>
                <div className="">
                  <p className="text-6xl sm:text-8xl font-chedros">14</p>
                  <p className="text-xl font-guthen text-horizon-grey-600">
                    Sponsors served
                  </p>
                </div>
                <div className="">
                  <p className="text-6xl sm:text-8xl font-chedros">24</p>
                  <p className="text-xl font-guthen text-horizon-grey-600">
                    Projects submitted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <WhatWeDoSection />
        <Container>
          <div className="py-32">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-4">
              <p className="text-2xl tracking-wide font-guthen text-center">
                Season One Events
              </p>
              <h2 className="text-5xl font-chedros text-center">
                We&apos;ve got a full slate of events between engineering,
                business, and design.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple">
                  And you&apos;re invited!
                </span>
              </h2>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-horizon-grey-800 text-white mt-3 sm:m-0"
                  href="/events"
                >
                  See all events &rarr;
                </Link>
              </motion.div>
            </div>
            <div className="pt-12 grid grid-cols-2 lg:grid-cols-3 gap-4">
              {events.map((event: Event) => (
                <div className="col-span-2 sm:col-span-1" key={event._id}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
        </Container>
        <div className="pb-32">
          <LogoCloud6 />
        </div>
        <div className="pt-20 pb-24 sm:py-24 bg-horizon-orange-300">
          <Container>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1 flex flex-col space-y-4 items-start justify-center order-last sm:order-none">
                <p className="font-guthen tracking-wide text-2xl">
                  Why we started
                </p>
                <h2 className="text-3xl md:text-5xl font-chedros">
                  “We started Kreative Horizon to give students the sort of
                  tools they can&apos;t get in the classroom. Events like
                  hackathons and pitch competitions{" "}
                  <span className="text-4xl md:text-[3.5rem] underline">
                    give students the chance to build something in the real
                    world and have fun doing it.”
                  </span>
                </h2>
                <p className="text-xl">Armaan Gupta, Founder</p>
                <Link
                  href="/about-us"
                  className="text-xl hover:underline pt-12 font-bold"
                >
                  Learn more about us &rarr;
                </Link>
              </div>
              <div className="col-span-2 sm:col-span-1 flex justify-center sm:justify-end items-center">
                <CldImage
                  src="kreativehorizon.com/founder-photo_pbibuz"
                  alt="Kreative, LLC Founder Photo"
                  className="w-full h-auto"
                  width={965}
                  height={1267}
                />
              </div>
            </div>
            <div className="pt-12">
              <FloatingCTA3 />
            </div>
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const events: Event[] = await getLatestEvents();

  return {
    props: {
      events,
    },
  };
}
