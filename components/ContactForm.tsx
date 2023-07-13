import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <div>
      <form
        name="khz_contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="grid grid-cols-1 gap-6"
        action="contact-us/?form_completed=true"
      >
        <input type="hidden" name="khz_contact" value="contact" />
        <p className="hidden">
          <label id="contact-form-bot-label">
            Dont fill this out if youre human:{" "}
            <input name="bot-field" aria-labelledby="contact-form-bot-label" />
          </label>
        </p>
        <div>
          <label
            htmlFor="name"
            className="block text-base font-medium leading-6 text-horizon-grey-800"
          >
            Full name<span className="text-horizon-pink"> *</span>
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 py-1.5 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
              placeholder="Richard Branson"
              required
              aria-required="true"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <label
              htmlFor="email"
              className="block text-base font-medium leading-6 text-horizon-grey-800"
            >
              Email<span className="text-horizon-pink"> *</span>
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
                placeholder="you@example.com"
                required
                aria-required="true"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex justify-between">
              <label
                htmlFor="phone"
                className="block text-base font-medium leading-6 text-horizon-grey-800"
              >
                Phone number
              </label>
              <span
                className="text-sm leading-6 text-gray-500"
                id="phone-optional"
              >
                Optional
              </span>
            </div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
              </div>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                className="block w-full rounded-md border-0 py-1.5 pl-16 text-horizon-grey-800 ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
                placeholder="+1 (555) 987-6543"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-base leading-6 text-horizon-grey-800"
          >
            Message<span className="text-horizon-pink"> *</span>
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="I would like to reach out about..."
              className="block w-full rounded-md border-0 px-3.5 py-2 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
              defaultValue={""}
              required
              aria-required="true"
            />
          </div>
        </div>
        <div className="flex justify-start items-center">
          <motion.div
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
          >
            <button
              type="submit"
              className="rounded-md py-2.5 px-5 font-bold bg-gradient-to-r from-horizon-orange to-horizon-pink text-white shadow-lg"
            >
              Submit now
            </button>
          </motion.div>
        </div>
      </form>
    </div>
  );
}
