import Container from "./Container";
import { motion } from "framer-motion";

export default function FloatingCTA() {
  return (
    <Container>
      <div className="w-full bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple xl:bg-floating-cta-w-logo xl:bg-cover xl:bg-right rounded-[2rem] grid grid-cols-1 xl:grid-cols-10 gap-4 px-8 lg:pr-12 xl:pr-0 lg:pl-12 pt-12 z-10">
        <div className="xl:col-span-6 pt-44 xl:pt-36 pb-12 xl:pb-24">
          <p className="text-2xl font-guthen tracking-wide text-white mb-2">
            Horizon Newsletter
          </p>
          <h2 className="text-5xl text-white font-chedros w-full">
            YOU NEED MORE EMAILS. JOIN THE LETTER.
          </h2>
          <p className="text-base text-white w-full lg:w-[70%] xl:w-[85%] mb-4">
            Your inbox could use a few more things to read. Get new events,
            programs, discounts, and giveaways straight to your phone. We
            promise it&apos;ll be worth it :)
          </p>
          <form
              method="POST"
              action={`/api/subscribe`}
          >
          <div className="bg-white bg-opacity-[.85] rounded-lg px-2 xs:pl-4 xs:pr-1 pt-1 pb-2 xs:pb-1 block xs:flex justify-between items-center w-full md:w-[75%] lg:w-[60%] xs:space-x-1">
            <input
              type="email"
              placeholder="Email Address"
              name={"email"}
              required
              className="bg-transparent px-2 xs:px-0 xs:mr-2 py-2 placeholder-[#E33232] placeholder-opacity-75 text-[#E33232] text-opacity-85 w-full border-transparent focus:border-transparent focus:ring-0"
            />
            <motion.div
              whileHover={{ scale: 0.97, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
            >
              <button className="bg-white py-3 px-6 md:py-1.5 md:px-4 rounded-md text-[#FF2684] w-full xs:w-auto font-bold">
                Subscribe
              </button>
            </motion.div>
          </div>
          </form>
        </div>
        <div className="xl:col-span-4" />
      </div>
    </Container>
  );
}
