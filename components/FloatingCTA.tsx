import { useState } from "react";
import Container from "./Container";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function FloatingCTA() {
  const [showSpinner, setShowSpinner] = useState(false);
  const [email, setEmail] = useState("");

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubscription = async (e: any) => {
    e.preventDefault();

    if (
      email === "" ||
      email === undefined ||
      email === null ||
      !validateEmail(email)
    ) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setShowSpinner(true);

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      console.log(error);
      toast.error(
        "There was an error subscribing to the newsletter. Please try again later :("
      );
      setShowSpinner(false);
      return;
    }

    console.log("Success! You have been subscribed.");
    window.location.href = "/newsletter/thank-you";
  };

  return (
    <Container>
      <div className="w-full bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple xl:bg-floating-cta-w-logo xl:bg-cover xl:bg-right rounded-[2rem] grid grid-cols-1 xl:grid-cols-10 gap-4 px-8 lg:pr-12 xl:pr-0 lg:pl-12 pt-12 z-10">
        <div className="xl:col-span-6 pt-28 md:pt-44 xl:pt-36 pb-12 xl:pb-24">
          <svg
            className="h-12 w-auto mb-6"
            viewBox="0 0 468 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.4679 0.951924C24.7283 0.951924 28.0554 5.21291 26.9314 10.4712C26.4817 12.783 25.2229 14.8681 23.5593 16.5C24.5484 18.1319 24.9081 20.217 24.4136 22.5288C23.2896 27.7871 18.1641 32.0481 12.9037 32.0481H0L6.51928 0.951924C6.51928 0.951924 16.2307 0.951924 19.4679 0.951924ZM17.3098 22.5288C17.5796 21.169 16.7703 20.0357 15.4215 20.0357C13.9827 20.0357 9.57659 20.0357 9.57659 20.0357L8.5425 24.9313C8.5425 24.9313 12.9486 24.9313 14.3874 24.9313C15.7362 24.9313 17.04 23.8434 17.3098 22.5288ZM19.8726 10.4712C20.1423 9.15659 19.2881 8.06868 17.9842 8.06868C16.5005 8.06868 12.0944 8.06868 12.0944 8.06868L11.0603 12.919C11.0603 12.919 15.4664 12.919 16.9501 12.919C18.254 12.919 19.5578 11.831 19.8726 10.4712Z"
              fill="#F6F6F4"
            />
            <path
              d="M48.7825 8.06868H38.3067L37.2726 13.0549H45.8151L44.3764 19.9451H35.7889L34.7548 24.9313H45.2306L43.7469 32.0481H26.2123L32.7316 0.951924H50.3112L48.7825 8.06868Z"
              fill="#F6F6F4"
            />
            <path
              d="M72.547 0L78.212 3.08242L63.9595 23.7074L62.206 32.0481H55.1472L56.9007 23.7074L51.3706 3.08242L58.3394 0L62.3409 14.7321L72.547 0Z"
              fill="#F6F6F4"
            />
            <path
              d="M96.1389 0C105.176 0 110.976 7.38874 109.043 16.5C107.109 25.6113 98.2071 33 89.1701 33C80.178 33 74.3781 25.6113 76.3114 16.5C78.1997 7.38874 87.1468 0 96.1389 0ZM101.579 16.5C102.613 11.5591 99.5559 7.11676 94.6552 7.11676C89.7545 7.11676 84.8089 11.5591 83.7748 16.5C82.7407 21.4409 85.798 25.9286 90.6987 25.9286C95.5994 25.9286 100.5 21.4409 101.579 16.5Z"
              fill="#F6F6F4"
            />
            <path
              d="M132.399 0.906595H139.413L132.849 32.0481H125.79L119.675 15.1401L116.078 32.0481H109.064L115.584 0.951924H122.642L128.802 17.9052L132.399 0.906595Z"
              fill="#F6F6F4"
            />
            <path
              d="M153.838 0.951924C162.335 0.951924 167.82 7.93269 165.977 16.5C164.179 25.0673 155.771 32.0481 147.273 32.0481C144.801 32.0481 137.472 32.0481 137.472 32.0481L143.991 0.951924C143.991 0.951924 151.365 0.951924 153.838 0.951924ZM158.918 16.5C159.907 11.831 156.94 8.06868 152.354 8.06868C151.635 8.06868 149.566 8.06868 149.566 8.06868L146.015 24.9313C146.015 24.9313 148.083 24.9313 148.757 24.9313C153.388 24.9313 157.974 21.169 158.918 16.5Z"
              fill="#F6F6F4"
            />
            <path
              d="M186.355 0.951924H210.588L209.15 7.61539H200.562L195.437 32.0481H188.378L193.503 7.61539H184.916L186.355 0.951924Z"
              fill="#F6F6F4"
            />
            <path
              d="M229.784 0.951924H236.843L230.279 32.0027H223.22L225.828 19.8091H216.071L213.463 32.0027H206.45L212.969 0.951924H220.028L217.465 13.1003H227.221L229.784 0.951924Z"
              fill="#F6F6F4"
            />
            <path
              d="M257.471 8.06868H246.996L245.961 13.0549H254.504L253.065 19.9451H244.478L243.444 24.9313H253.919L252.436 32.0481H234.901L241.42 0.951924H259L257.471 8.06868Z"
              fill="#F6F6F4"
            />
            <path
              d="M57.6919 55.4234H75.144L58.9147 131.812H41.4626L47.9099 101.814H23.7882L17.3409 131.812H0L16.1182 55.4234H33.5703L27.2341 85.3097H51.3558L57.6919 55.4234Z"
              fill="white"
            />
            <path
              d="M124.145 53.0816C146.488 53.0816 160.827 71.2587 156.047 93.6734C151.268 116.088 129.258 134.265 106.915 134.265C84.6829 134.265 70.3433 116.088 75.1232 93.6734C79.7919 71.2587 101.913 53.0816 124.145 53.0816ZM137.595 93.6734C140.152 81.5182 132.593 70.5896 120.476 70.5896C108.36 70.5896 96.1324 81.5182 93.5757 93.6734C91.019 105.829 98.5779 116.869 110.694 116.869C122.811 116.869 134.927 105.829 137.595 93.6734Z"
              fill="white"
            />
            <path
              d="M219.018 84.0831C217.239 92.4468 212.126 99.9183 205.456 105.16L213 131.5L195.007 131.923L188.004 112.631C186.781 112.743 185.559 112.854 184.336 112.854C182.669 112.854 177.555 112.854 177.555 112.854L173.442 131.923H156.101L172.219 55.4234C172.219 55.4234 190.45 55.4234 196.452 55.4234C212.348 55.4234 222.353 68.2478 219.018 84.0831ZM202.677 84.0831C204.011 77.9497 199.009 72.9315 192.784 72.9315C191.117 72.9315 186.003 72.9315 186.003 72.9315L181.223 95.3462C181.223 95.3462 186.337 95.3462 188.004 95.3462C194.229 95.3462 201.343 90.328 202.677 84.0831Z"
              fill="white"
            />
            <path
              d="M234.53 55.4234H251.982L235.753 131.923H218.412L234.53 55.4234Z"
              fill="white"
            />
            <path
              d="M314.653 55.4234L311.095 71.8163L269.744 115.085H301.98L298.423 131.923H244.511L248.068 115.085L289.975 71.8163H257.183L260.629 55.4234H314.653Z"
              fill="white"
            />
            <path
              d="M361.01 53.0816C383.354 53.0816 397.693 71.2587 392.913 93.6734C388.133 116.088 366.124 134.265 343.781 134.265C321.549 134.265 307.209 116.088 311.989 93.6734C316.658 71.2587 338.778 53.0816 361.01 53.0816ZM374.461 93.6734C377.018 81.5182 369.459 70.5896 357.342 70.5896C345.226 70.5896 332.998 81.5182 330.442 93.6734C327.885 105.829 335.444 116.869 347.56 116.869C359.677 116.869 371.793 105.829 374.461 93.6734Z"
              fill="white"
            />
            <path
              d="M450.659 55.3119H468L451.771 131.923H434.319L419.201 90.328L410.308 131.923H392.967L409.085 55.4234H426.537L441.766 97.1304L450.659 55.3119Z"
              fill="white"
            />
          </svg>
          <h2 className="text-5xl text-white font-chedros w-full">
            YOU NEED MORE EMAILS. JOIN THE NEWSLETTER.
          </h2>
          <p className="text-xl text-white w-full lg:w-[70%] xl:w-[85%] mb-4">
            Your inbox could use a few more things to read. Get new events,
            programs, discounts, and giveaways straight to your phone. We
            promise it&apos;ll be worth it :)
          </p>
          <div className="bg-white bg-opacity-[.85] rounded-lg px-2 xs:pl-4 xs:pr-1 pt-1 pb-2 xs:pb-1 block xs:flex justify-between items-center w-full md:w-[75%] lg:w-[60%] xs:space-x-1">
            <input
              type="email"
              placeholder="Email Address"
              name={"email"}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent px-2 xs:px-0 xs:mr-2 py-2 placeholder-[#E33232] placeholder-opacity-75 text-[#E33232] text-opacity-85 w-full border-transparent focus:border-transparent focus:ring-0"
            />
            <motion.div
              whileHover={{ scale: 0.97, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                className="bg-white py-3 px-6 md:py-1.5 md:px-4 rounded-md text-horizon-purple-darker w-full xs:w-auto font-bold"
                onClick={handleSubscription}
              >
                {showSpinner ? (
                  <div className="flex justify-center items-center space-x-3">
                    <motion.span
                      className="flex items-center w-5 h-5 border-2 border-white border-t-horizon-orange rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      role="status"
                    />
                  </div>
                ) : (
                  "Subscribe"
                )}
              </button>
            </motion.div>
          </div>
        </div>
        <div className="xl:col-span-4" />
      </div>
    </Container>
  );
}
