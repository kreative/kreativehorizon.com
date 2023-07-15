import Link from "next/link";
import Container from "../components/Container";
import SplashContainer from "@/components/SplashContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Accordian from "@/components/Accordian";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

const eventFaqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

const sponsorFaqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

const labsFaqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

const travelGrantFaqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

export default function Faqs() {
  return (
    <div>
      <NextSeo
        title="FAQs"
        description="Answers to your most frequently asked questions about Kreative Horizon and our services."
      />
      <Navbar />
      <main>
        <SplashContainer>
          <div className="bg-horizon-grey-200">
            <Container>
              <div className="pt-32 pb-12 md:py-16 min-h-[25rem] lg:min-h-[30rem] flex flex-col justify-end items-start space-y-4">
                <p className="text-2xl tracking-wide font-guthen">
                  Frequently asked questions
                </p>
                <h1 className="text-6xl md:text-7xl font-chedros">
                  You have questions. We have answers.
                </h1>
              </div>
            </Container>
          </div>
        </SplashContainer>
        <Container>
          <div className="pt-24 pb-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="col-span-1 md:col-span-4 flex flex-col justify-start items-start space-y-4 pr-8">
              <h2 className="text-5xl font-chedros text-horizon-orange">
                Events
              </h2>
              <p className="text-lg text-horizon-600 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-2.5 px-5 bg-opacity-0 bg-white text-horizon-orange border border-horizon-orange"
                  href="/events"
                >
                  See events
                </Link>
              </motion.div>
            </div>
            <div className="col-span-1 md:col-span-8">
              <Accordian faqs={eventFaqs} />
            </div>
          </div>
        </Container>
        <Container>
          <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="col-span-1 md:col-span-4 flex flex-col justify-start items-start space-y-4 pr-8">
              <h2 className="text-5xl font-chedros text-horizon-pink">
                SPONSORSHIP
              </h2>
              <p className="text-lg text-horizon-600 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-2.5 px-5 bg-opacity-0 bg-white text-horizon-pink border border-horizon-pink"
                  href="/sponsor"
                >
                  Sponsor us
                </Link>
              </motion.div>
            </div>
            <div className="col-span-1 md:col-span-8">
              <Accordian faqs={sponsorFaqs} />
            </div>
          </div>
        </Container>
        <Container>
          <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="col-span-1 md:col-span-4 flex flex-col justify-start items-start space-y-4 pr-8">
              <h2 className="text-5xl font-chedros text-horizon-purple">
                Horizon Labs
              </h2>
              <p className="text-lg text-horizon-600 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-2.5 px-5 bg-opacity-0 bg-white text-horizon-purple border border-horizon-purple"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
            <div className="col-span-1 md:col-span-8">
              <Accordian faqs={labsFaqs} />
            </div>
          </div>
        </Container>
        <Container>
          <div className="pt-16 pb-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="col-span-1 md:col-span-4 flex flex-col justify-start items-start space-y-4 pr-8">
              <h2 className="text-5xl font-chedros text-horizon-orange">
                Travel Grants
              </h2>
              <p className="text-lg text-horizon-600 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-2.5 px-5 bg-opacity-0 bg-white text-horizon-orange border border-horizon-orange"
                  href="/travel-grants"
                >
                  Submit a request
                </Link>
              </motion.div>
            </div>
            <div className="col-span-1 md:col-span-8">
              <Accordian faqs={travelGrantFaqs} />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
