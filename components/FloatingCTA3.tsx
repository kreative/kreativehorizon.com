import Link from "next/link";
import { motion } from "framer-motion";

export default function FloatingCTA3() {
  return (
    <div className={`grid grid-cols-6 gap-4 p-6 rounded-2xl bg-white bg-opacity-30`}>
      <div className="col-span-6 md:col-span-4 flex justify-start items-center space-x-6">
        <div>
          <svg
            className="w-24 h-auto"
            viewBox="0 0 84 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M66.5715 12.6284C66.0439 8.77144 64.5332 5.68052 62.0814 3.44139C59.9358 1.4818 57.1816 0.310046 54.1168 0.0522534C51.2229 -0.190117 48.2713 0.416865 45.8078 1.76411C44.0692 2.71476 42.6557 3.99837 41.6682 5.49675C40.6807 3.99837 39.2672 2.71476 37.5286 1.76411C35.0651 0.416703 32.1143 -0.19028 29.2196 0.0522534C26.1548 0.310046 23.4006 1.48197 21.255 3.44155C18.803 5.68068 17.2925 8.7716 16.7649 12.6286C16.1808 16.8982 17.1374 21.2327 19.6086 25.5116C21.5431 28.8619 24.4089 32.1843 28.1264 35.3865C34.3981 40.7887 40.8637 43.9594 41.1359 44.0917C41.3039 44.1733 41.4861 44.2142 41.6682 44.2142C41.8504 44.2142 42.0325 44.1733 42.2005 44.0917C42.4728 43.9594 48.9384 40.7887 55.21 35.3865C58.9274 32.1842 61.7933 28.8619 63.7279 25.5116C66.199 21.2325 67.1555 16.8981 66.5715 12.6284Z"
              fill="url(#paint0_linear_528_1536)"
            />
            <path
              d="M66.4974 12.6283C65.9698 8.77131 64.4591 5.68039 62.0073 3.44126C59.8617 1.48168 57.1074 0.30992 54.0427 0.0521266C52.6344 -0.0658932 51.2126 0.0190096 49.8399 0.290764C52.2311 0.774044 54.38 1.84694 56.1259 3.44142C58.5777 5.68055 60.0885 8.77147 60.6161 12.6285C61.2001 16.8981 60.2435 21.2325 57.7724 25.5115C55.8378 28.8618 52.972 32.1842 49.2545 35.3863C45.2415 38.8432 41.1519 41.3842 38.6533 42.8021C40.0595 43.6002 40.9636 44.0438 41.0616 44.0915C41.2296 44.1732 41.4118 44.2141 41.5939 44.2141C41.7761 44.2141 41.9582 44.1732 42.1262 44.0915C42.3985 43.9592 48.8641 40.7886 55.1357 35.3863C58.8531 32.184 61.719 28.8618 63.6536 25.5115C66.1248 21.2324 67.0813 16.898 66.4974 12.6283Z"
              fill="black"
              fillOpacity="0.07"
            />
            <path
              d="M56.1644 52.5133L60.2026 40.1129C60.7304 38.4915 62.3359 37.5149 64.0177 37.7908C64.9969 37.9514 65.8578 38.5277 66.3796 39.3717C66.9013 40.2158 67.0319 41.2436 66.7375 42.1913L65.401 46.4957C65.3409 46.6889 65.2338 46.8642 65.089 47.0056L58.1731 53.7612C57.9391 53.9896 57.632 54.1078 57.3219 54.1078C57.1006 54.1078 56.8781 54.0475 56.6797 53.9245C56.2036 53.6287 55.9909 53.0462 56.1644 52.5133Z"
              fill="#DB9975"
            />
            <path
              d="M57.3218 54.1078C57.1005 54.1078 56.8779 54.0476 56.6796 53.9245C56.2036 53.6287 55.9909 53.0463 56.1645 52.5133L60.2026 40.1129C60.6336 38.7888 61.7836 37.8954 63.1068 37.7625L58.7362 53.211L58.1729 53.7612C57.939 53.9896 57.6318 54.1078 57.3218 54.1078Z"
              fill="#F7B081"
            />
            <path
              d="M63.0754 45.7738L65.7588 37.1321C66.2871 35.4306 68.0523 34.4462 69.7774 34.8912C70.6642 35.1199 71.4261 35.7113 71.8675 36.5139C72.3089 37.3163 72.4003 38.2764 72.1184 39.1478L70.1733 45.1623C70.042 45.5682 69.708 45.8755 69.2929 45.973C68.878 46.0703 68.4418 45.9433 68.1439 45.6384C67.928 45.4175 67.6392 45.2938 67.3304 45.2902C67.0161 45.2862 66.7296 45.4034 66.5088 45.6193L65.0892 47.006C64.8554 47.2344 64.5481 47.3526 64.2381 47.3526C64.0195 47.3526 63.7996 47.2938 63.603 47.1735C63.1273 46.8824 62.9101 46.306 63.0754 45.7738Z"
              fill="#DB9975"
            />
            <path
              d="M58.9615 58.8209L68.2218 47.1654C68.5833 46.7103 68.5497 46.0539 68.1437 45.6383C67.8278 45.3149 67.7171 44.843 67.8562 44.4128L71.3591 33.5824C71.8731 31.9931 73.5007 31.0147 75.1452 31.3079C76.0875 31.4756 76.9158 32.039 77.4177 32.854C77.9197 33.6689 78.0505 34.6621 77.7762 35.5791L75.8939 41.8751C74.1202 47.8081 70.5846 52.935 65.6697 56.7019L60.6554 60.5448C60.4356 60.7133 60.1748 60.7959 59.9151 60.7959C59.5982 60.7959 59.2831 60.6727 59.0463 60.4318C58.6156 59.9932 58.5791 59.3023 58.9615 58.8209Z"
              fill="#DB9975"
            />
            <path
              d="M63.0754 45.7738L65.7588 37.1321C66.1603 35.8389 67.277 34.9618 68.5468 34.8098L64.9496 47.1212C64.7392 47.2732 64.4897 47.3524 64.2377 47.3524C64.0192 47.3524 63.7993 47.2936 63.6027 47.1733C63.1273 46.8824 62.9101 46.306 63.0754 45.7738Z"
              fill="#F7B081"
            />
            <path
              d="M60.0876 60.7819C60.0303 60.7902 59.9728 60.7957 59.9152 60.7957C59.5983 60.7957 59.2832 60.6725 59.0463 60.4316C58.6155 59.9931 58.5791 59.3022 58.9616 58.8209L68.2218 47.1653C68.5834 46.7103 68.5498 46.0538 68.1438 45.6382C67.8278 45.3149 67.7171 44.8429 67.8563 44.4127L71.3592 33.5823C71.7934 32.2398 73.023 31.3366 74.3855 31.2642L68.3882 50.4254L60.0876 60.7819Z"
              fill="#F7B081"
            />
            <path
              d="M44.6764 69.0111C44.6998 68.768 45.2867 63.006 48.5699 58.3415C51.4928 54.1889 55.5786 52.2917 56.6458 51.8488L64.8072 43.8769C66.2237 42.4931 68.502 42.5197 69.8858 43.9365C69.9327 43.9845 69.978 44.0334 70.0215 44.0834C71.0815 45.2967 71.0539 47.1193 70.0366 48.3686L59.9153 60.7958L68.5562 52.2305C69.9983 50.8011 71.0697 49.0413 71.6778 47.1042L73.0866 42.6152L73.0837 42.618C73.2548 42.1436 73.4156 41.6641 73.5611 41.1774L76.1319 32.5785C76.1345 32.5699 76.1371 32.5614 76.1398 32.5528C76.6963 30.8306 78.3988 29.7768 80.1887 30.0476C81.2483 30.2077 82.1829 30.82 82.7528 31.7275C83.3228 32.6348 83.4688 33.7426 83.1532 34.7665L79.3062 47.2503C79.1098 47.8878 78.9145 48.5384 78.7168 49.197C76.9449 55.0998 74.9363 61.7901 70.0949 65.7435L61.1325 73.0622V81.7825C61.1325 82.4549 60.5874 83.0001 59.915 83.0001H45.8884C45.216 83.0001 44.6709 82.4549 44.6709 81.7825V69.1276C44.6707 69.0888 44.6727 69.0499 44.6764 69.0111Z"
              fill="#FFC89F"
            />
            <path
              d="M70.0346 48.3688C71.0521 47.1196 71.0797 45.2969 70.0195 44.0836C69.9758 44.0336 69.9305 43.9845 69.8838 43.9367C69.7169 43.7657 69.5364 43.6162 69.3466 43.4858L59.619 55.7912C58.7097 56.9357 58.8385 59.8055 59.9135 60.796L70.0346 48.3688Z"
              fill="#FFB98A"
            />
            <path
              d="M59.9131 60.7964L59.9143 60.7952L59.9131 60.7964Z"
              fill="#FFB98A"
            />
            <path
              d="M82.7525 31.7277C82.2411 30.9138 81.4361 30.3384 80.5111 30.1128L75.6473 45.8753C73.719 52.1327 71.901 59.1556 66.8294 63.297L56.9326 70.9809V83.0001H59.9148C60.5872 83.0001 61.1323 82.455 61.1323 81.7826V73.0623L70.0947 65.7436C74.9361 61.7902 76.9445 55.0999 78.7166 49.1971C78.9143 48.5385 79.1096 47.888 79.3061 47.2504L83.153 34.7665C83.4684 33.7427 83.3225 32.635 82.7525 31.7277Z"
              fill="#FFB98A"
            />
            <path
              d="M27.1521 52.5133L23.1141 40.1129C22.5862 38.4915 20.9808 37.5149 19.299 37.7908C18.3197 37.9514 17.4589 38.5277 16.9371 39.3717C16.4154 40.2158 16.2848 41.2436 16.5792 42.1913L17.9157 46.4957C17.9757 46.6889 18.0829 46.8642 18.2277 47.0056L25.1436 53.7612C25.3776 53.9896 25.6847 54.1078 25.9948 54.1078C26.216 54.1078 26.4386 54.0475 26.637 53.9245C27.1131 53.6287 27.3256 53.0462 27.1521 52.5133Z"
              fill="#DB9975"
            />
            <path
              d="M25.9949 54.108C26.2162 54.108 26.4387 54.0478 26.6371 53.9248C27.1131 53.629 27.3257 53.0465 27.1522 52.5136L23.1142 40.1132C22.683 38.789 21.5332 37.8957 20.21 37.7627L24.5806 53.2113L25.1439 53.7614C25.3777 53.9899 25.685 54.108 25.9949 54.108Z"
              fill="#F7B081"
            />
            <path
              d="M20.241 45.7741L17.5576 37.1323C17.0293 35.4309 15.2641 34.4464 13.5391 34.8914C12.6522 35.1201 11.8904 35.7115 11.449 36.5141C11.0076 37.3166 10.9162 38.2767 11.198 39.1481L13.1431 45.1626C13.2745 45.5684 13.6084 45.8757 14.0235 45.9733C14.4384 46.0705 14.8746 45.9436 15.1725 45.6387C15.3884 45.4177 15.6772 45.294 15.986 45.2905C16.3003 45.2864 16.5868 45.4036 16.8076 45.6195L18.2272 47.0062C18.461 47.2346 18.7683 47.3528 19.0784 47.3528C19.2969 47.3528 19.5168 47.2941 19.7134 47.1738C20.1891 46.8827 20.4063 46.3062 20.241 45.7741Z"
              fill="#DB9975"
            />
            <path
              d="M24.3548 58.8209L15.0946 47.1654C14.7331 46.7103 14.7667 46.0539 15.1727 45.6383C15.4886 45.3149 15.5993 44.843 15.4602 44.4128L11.9572 33.5824C11.4433 31.9931 9.81568 31.0147 8.17119 31.3079C7.22882 31.4756 6.40057 32.039 5.89846 32.854C5.39651 33.6689 5.26582 34.6621 5.54001 35.5791L7.42232 41.8751C9.19603 47.8081 12.7316 52.935 17.6465 56.7019L22.6608 60.5448C22.8807 60.7133 23.1414 60.7959 23.4011 60.7959C23.718 60.7959 24.0331 60.6727 24.2699 60.4318C24.701 59.9932 24.7373 59.3023 24.3548 58.8209Z"
              fill="#DB9975"
            />
            <path
              d="M20.242 45.7738L17.5585 37.1321C17.157 35.8389 16.0403 34.9618 14.7705 34.8098L18.3678 47.1212C18.5781 47.2732 18.8277 47.3524 19.0796 47.3524C19.2981 47.3524 19.5181 47.2936 19.7147 47.1733C20.19 46.8824 20.4072 46.306 20.242 45.7738Z"
              fill="#F7B081"
            />
            <path
              d="M23.2286 60.7819C23.2859 60.7902 23.3434 60.7957 23.401 60.7957C23.7179 60.7957 24.033 60.6725 24.2698 60.4316C24.7007 59.9931 24.737 59.3022 24.3546 58.8209L15.0943 47.1653C14.7328 46.7103 14.7664 46.0538 15.1724 45.6382C15.4883 45.3149 15.599 44.8429 15.4599 44.4127L11.957 33.5823C11.5227 32.2398 10.2932 31.3366 8.93066 31.2642L14.9279 50.4254L23.2286 60.7819Z"
              fill="#F7B081"
            />
            <path
              d="M38.6401 69.0111C38.6167 68.768 38.0299 63.006 34.7466 58.3415C31.8237 54.1889 27.738 52.2917 26.6708 51.8488L18.5094 43.8769C17.0928 42.4931 14.8146 42.5197 13.4308 43.9365C13.3839 43.9845 13.3387 44.0334 13.2951 44.0834C12.235 45.2967 12.2626 47.1193 13.28 48.3686L23.4013 60.7958L14.7603 52.2305C13.3183 50.8011 12.2469 49.0413 11.6387 47.1042L10.23 42.6152L10.2329 42.618C10.0618 42.1436 9.90091 41.6641 9.75545 41.1774L7.18466 32.5785C7.18207 32.5699 7.17947 32.5614 7.17671 32.5528C6.62021 30.8306 4.91761 29.7768 3.12783 30.0476C2.06825 30.2077 1.13367 30.82 0.563701 31.7275C-0.00626826 32.6348 -0.15221 33.7426 0.163375 34.7665L4.0103 47.2503C4.20673 47.8878 4.40202 48.5384 4.59975 49.197C6.37184 55.0998 8.38028 61.7901 13.2217 65.7435L22.1841 73.0622V81.7825C22.1841 82.4549 22.7292 83.0001 23.4016 83.0001H37.4281C38.1005 83.0001 38.6456 82.4549 38.6456 81.7825V69.1276C38.6458 69.0888 38.6439 69.0499 38.6401 69.0111Z"
              fill="#FFC89F"
            />
            <path
              d="M34.7468 58.3413C31.8239 54.1887 27.7381 52.2914 26.6709 51.8485L18.5095 43.8766C17.093 42.4928 14.8147 42.5195 13.431 43.9362C13.384 43.9842 13.3389 44.0333 13.2952 44.0831C13.2948 44.0836 13.2944 44.0842 13.2939 44.0847L23.1086 54.1885C23.1086 54.1885 27.7299 55.8862 30.8653 60.3408C34.0007 64.7953 34.5424 70.426 34.5424 70.426V79.4699V82.9998H37.4283C38.1007 82.9998 38.6458 82.4546 38.6458 81.7822V69.1273C38.6458 69.0884 38.6439 69.0496 38.6401 69.0108C38.6169 68.7676 38.0301 63.0056 34.7468 58.3413Z"
              fill="#FFB98A"
            />
            <path
              d="M47.3677 18.3197L43.1534 23.1479L47.587 28.5695V28.7733H43.8894L40.49 24.4119V28.7733H37.627V11.0667L40.49 12.8157V21.9888L43.7891 18.1158H47.3677V18.3197Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_528_1536"
                x1="66.4006"
                y1="18.26"
                x2="16.3239"
                y2="18.5367"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF2DEA" />
                <stop offset="0.984375" stopColor="#FF3D43" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="text-4xl font-chedros">
            Have a question or need some help?
          </p>
          <p className="text-xl text-horizon-grey-700">
            Our team is here for you. Drop us a line and we&apos;ll be in touch
            to help you soon!{" "}<span className="inline-block md:hidden underline underline-offset-2"><Link href="/contact-us">You can reach our team here</Link></span>
          </p>
        </div>
      </div>
      <div className="hidden md:flex col-span-2 justify-end items-center">
        <motion.div
          whileHover={{
            scale: 0.97,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            className="rounded-md py-3 px-7 font-bold bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple text-white"
            href="/contact-us"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
}