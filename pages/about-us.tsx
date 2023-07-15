import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogoCloud1 from "../components/LogoCloud1";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

export default function AboutUs() {
  return (
    <div>
      <NextSeo
        title="About Us"
        description="Discover the story behind Kreative Horizon and our mission to help students build tomorrow, today."
      />
      <Head>
        <style>{`
          .text-stroke {
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: black;
          }
        `}</style>
      </Head>
      <Navbar />
      <main>
        <Container>
          <div className="flex flex-col justify-start items-center rounded-[30px] bg-horizon-grey-200 pt-20 px-6 xs:px-12 md:px-20 lg:px-24 mt-8 mb-16 sm:mb-24 md:mb-44">
            <p className="text-2xl font-guthen tracking-wide pb-2">
              About Kreative Horizon
            </p>
            <h1 className="text-center pb-8">
              <span className="text-5xl sm:text-6xl font-chedros">
                We&apos;re on a mission to empower students to build the future
                of tomorrow today.
              </span>{" "}
              <span className="text-5xl sm:text-6xl font-chedros text-stroke">
                Through hackathons, workshops, anD MORE.
              </span>
            </h1>
            <Image
              src="/images/khz_3d_logo.png"
              alt="Kreative Horizon 3D logo in Color"
              className="h-auto w-[50%] -mb-16 sm:-mb-24 md:-mb-44"
              width={700}
              height={700}
            />
          </div>
        </Container>
        <div className="py-24">
          <LogoCloud1 />
        </div>
        <Container>
          <div className="grid grid-cols-2 gap-8 py-12 md:py-24">
            <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-start space-y-3 pr-6">
              <p className="text-2xl font-guthen text-left">In the beginning</p>
              <h2 className="text-5xl font-chedros">
                Kreative horizon started in 2019 with BUILDCHICAGO...
              </h2>
              <p className="text-lg text-horizon-grey-600">
                Kreative Horizon is an organization that aims provide the tools
                and resources to empower individuals to solve meaningful
                problems. Founded in 2019, Kreative Horizon began with its
                first-ever hackathon event, “BuildChicago.” The event was a
                24-hour hackathon that welcomed high school and college students
                to participate. With over 75 participants and a panel of
                esteemed judges, the event was a resounding success.
              </p>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center items-center">
              <Image
                src="/images/about-us/our-story-1-photo-group.png"
                alt="BuildChicago pictures and logo photo group"
                className="w-full sm:w-[75%] md:w-full h-auto"
                width={500}
                height={900}
              />
            </div>
          </div>
        </Container>
        <Container>
          <div className="grid grid-cols-2 gap-8 py-12 md:py-24">
            <div className="col-span-2 md:col-span-1 order-2 md:order-none flex justify-center items-center">
              <Image
                src="/images/about-us/2020-event-logos-photo-group.png"
                alt="Kreative Horizon 2020 event logos photo group"
                className="w-full xs:w-[80%] sm:w-[60%] md:w-full h-auto"
                width={500}
                height={900}
              />
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-start space-y-3 pl-6">
              <p className="text-2xl font-guthen text-left">
                Following our success
              </p>
              <h2 className="text-5xl font-chedros">
                WE planned to run 4 new events across the country
              </h2>
              <p className="text-lg text-horizon-grey-600">
                Following the success of “BuildChicago,” Kreative Horizon
                organized four more events. These events include “BuildChicago
                2020,” “BuildNewYork,” “SheBuilds Chicago,” and “SheBuilds SF.”
                Among these events, “SheBuilds SF” had the potential to be the
                largest all-female hackathon in the San Francisco area. The
                event was partnered with Y-Combinator backed Make School, and we
                estimated over 500 attendees from across the nation would
                participate in hacking away at problems they found important to
                solve. Our team had grown, and sponsors were returning to work
                with us. We were excited about the upcoming events.
              </p>
            </div>
          </div>
        </Container>
        <Container>
          <div className="grid grid-cols-2 gap-8 pt-6 md:pt-12 pb-12 md:pb-24">
            <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-start space-y-3 pr-6">
              <p className="text-2xl font-guthen text-left">However...</p>
              <h2 className="text-5xl font-chedros">
                just two weeks after partnering with Make School, the unexpected
                happened.
              </h2>
              <p className="text-lg text-horizon-grey-600">
                The nation was hit with the COVID-19 pandemic, and everything
                came to a halt. Venues backed out of hosting events, and people
                hesitated to attend them. The vision we had crafted for 2020 to
                connect hundreds of students was put on hold. It was a
                challenging time for everyone, and we had to make some difficult
                decisions.
              </p>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center items-center">
              <Image
                src="/images/about-us/covid19-photo-group.png"
                alt="COVID19 photo group"
                className="w-full h-auto block xs:hidden md:block"
                width={500}
                height={900}
              />
              <Image
                src="/images/about-us/covid19-photo-group-tablet.png"
                alt="COVID19 photo group"
                className="w-full h-auto hidden xs:block md:hidden"
                width={500}
                height={900}
              />
            </div>
          </div>
        </Container>
        <div className="pt-24 sm:pt-32 pb-8 sm:pb-4 bg-horizon-orange-100">
          <Container>
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-2 sm:col-span-1 flex flex-col justify-start items-start space-y-3">
                <p className="text-2xl font-guthen text-left">
                  But now we&apos;re back!
                </p>
                <h2 className="text-5xl font-chedros">
                  We just ran hackiowastate v1, and now we&apos;re bringing six
                  new events to the state of iowa
                </h2>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg text-horizon-grey-600">
                  We were thrilled to announce and run our newest event,
                  “HackIowaState.” This 24-hour hackathon event was designed for
                  Iowa State students in Ames, IA. The event is set to take
                  place in April, and we are starting small but mighty. This
                  even was an excellent opportunity for students to showcase
                  their skills and creativity.
                  <br />
                  <br />
                  We are still dedicated to providing a platform for people to
                  come together and explore new ideas. We believe in the power
                  of technology to create a better future, and we want to be a
                  part of that change. We invite you to join us as we craft the
                  world of tomorrow, today!
                </p>
              </div>
            </div>
          </Container>
        </div>
        <div className="bg-gradient-to-b from-horizon-orange-100 to-transparent ">
          <Container>
            <Image
              src="/images/about-us/hackiowastate-photo-group.png"
              alt="HackIowaState v1 Photo Group"
              className="w-full h-auto hidden sm:block"
              width={1040}
              height={500}
            />
            <Image
              src="/images/about-us/hackiowastate-photo-group-sm.png"
              alt="HackIowaState v1 Photo Group"
              className="w-full h-auto block sm:hidden"
              width={1040}
              height={500}
            />
          </Container>
          <Container>
            <div className="py-24 grid grid-cols-3 gap-4">
              <div className="col-span-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-3 xs:col-span-1 flex justify-start xs:justify-center items-center">
                    <Image
                      src="/images/about-us/hackisu_v2_sticker.png"
                      alt="HackISU v2 Sticker Logo"
                      className="w-[60%] xs:w-full sm:w-[85%] h-auto"
                      width={400}
                      height={150}
                    />
                  </div>
                  <div className="col-span-3 xs:col-span-1 flex justify-end xs:justify-center items-center">
                    <Image
                      src="/images/about-us/dataisu_v1_sticker.png"
                      alt="HackISU v2 Sticker Logo"
                      className="w-[60%] xs:w-full sm:w-[85%] h-auto"
                      width={400}
                      height={150}
                    />
                  </div>
                  <div className="col-span-3 xs:col-span-1 flex justify-start xs:justify-center items-center">
                    <Image
                      src="/images/about-us/designjamisu_v1_sticker.png"
                      alt="HackISU v2 Sticker Logo"
                      className="w-[60%] xs:w-full sm:w-[85%] h-auto"
                      width={400}
                      height={150}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-3 flex justify-center items-center">
                <div className="py-12 flex flex-col justify-center items-center max-w-lg space-y-3">
                  <p className="text-2xl font-guthen tracking-wide">
                    Join the movement
                  </p>
                  <h2 className="text-5xl font-chedros text-center">
                    Discover all the new events on the horizon for 2023-24
                  </h2>
                  <p className="text-lg text-horizon-grey-600 text-center pb-3">
                    Hackathons, datathons, design jams, and pitch competitions.
                    We&apos;re bringing the best student technology events to
                    Iowa and we want you to be apart of it!
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        className="rounded-md py-2.5 px-5 font-bold bg-horizon-grey-800 text-white border border-border"
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
                        className="rounded-md py-2.5 px-5 bg-opacity-0 bg-white text-horizon-grey-800 border border-horizon-grey-800"
                        href="/get-involved"
                      >
                        Get involved
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-3 xs:col-span-1 flex justify-end xs:justify-center items-center">
                    <Image
                      src="/images/about-us/pitchames_v1_sticker.png"
                      alt="HackISU v2 Sticker Logo"
                      className="w-[60%] xs:w-full sm:w-[85%] h-auto"
                      width={400}
                      height={150}
                    />
                  </div>
                  <div className="col-span-3 xs:col-span-1 flex justify-start xs:justify-center items-center">
                    <Image
                      src="/images/about-us/hackisu_v3_sticker.png"
                      alt="HackISU v2 Sticker Logo"
                      className="w-[60%] xs:w-full sm:w-[85%] h-auto"
                      width={400}
                      height={150}
                    />
                  </div>
                  <div className="col-span-3 xs:col-span-1 flex justify-end xs:justify-center items-center">
                    <Image
                      src="/images/about-us/builddsm_v1_sticker.png"
                      alt="HackISU v2 Sticker Logo"
                      className="w-[60%] xs:w-full sm:w-[85%] h-auto"
                      width={400}
                      height={150}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  );
}