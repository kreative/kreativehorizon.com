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
}: {
  label: string;
  title: string;
  description: string;
  btnLabel: string;
  btnLink: string;
  btnTarget?: string;
}) {
  return (
    <Container>
      <div className="bg-horizon-grey-200 rounded-3xl py-16 px-8 sm:p-16">
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
          <div className="col-span-12 sm:col-span-4 flex justify-end items-center mt-10">
            <svg
              className="w-full h-auto"
              viewBox="0 0 250 249"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M199.205 37.789C197.626 26.2474 193.105 16.9982 185.768 10.2979C179.348 4.43411 171.106 0.927775 161.935 0.156362C153.276 -0.568902 144.443 1.24742 137.072 5.27887C131.869 8.12358 127.64 11.9646 124.685 16.4483C121.73 11.9646 117.5 8.12358 112.297 5.27887C104.926 1.24693 96.0956 -0.569388 87.4337 0.156362C78.2628 0.927775 70.0211 4.4346 63.6006 10.2984C56.2634 16.9987 51.7432 26.2479 50.1645 37.7895C48.4167 50.5659 51.2793 63.5361 58.6738 76.3402C64.4628 86.3657 73.0382 96.3076 84.1625 105.89C102.93 122.055 122.277 131.543 123.092 131.939C123.594 132.183 124.139 132.306 124.685 132.306C125.23 132.306 125.775 132.183 126.277 131.939C127.092 131.543 146.44 122.055 165.207 105.89C176.33 96.3071 184.906 86.3657 190.695 76.3402C198.09 63.5356 200.952 50.5654 199.205 37.789Z"
                fill="url(#paint0_linear_244_954)"
              />
              <path
                d="M198.985 37.789C197.406 26.2474 192.886 16.9982 185.549 10.2979C179.128 4.4341 170.887 0.927763 161.716 0.15635C157.502 -0.196809 153.247 0.0572519 149.139 0.870442C156.295 2.3166 162.725 5.5271 167.95 10.2984C175.286 16.9987 179.807 26.2479 181.386 37.7895C183.134 50.5659 180.271 63.5361 172.876 76.3402C167.087 86.3656 158.512 96.3075 147.388 105.889C135.379 116.234 123.142 123.837 115.665 128.08C119.873 130.468 122.578 131.796 122.872 131.939C123.374 132.183 123.919 132.306 124.464 132.306C125.009 132.306 125.554 132.183 126.057 131.939C126.872 131.543 146.219 122.055 164.986 105.889C176.11 96.3071 184.686 86.3656 190.475 76.3402C197.87 63.5356 200.732 50.5654 198.985 37.789Z"
                fill="black"
                fillOpacity="0.07"
              />
              <path
                d="M168.063 157.139L180.146 120.032C181.726 115.18 186.53 112.258 191.563 113.083C194.493 113.564 197.069 115.288 198.63 117.814C200.191 120.34 200.582 123.415 199.701 126.251L195.702 139.132C195.522 139.71 195.202 140.234 194.768 140.658L174.073 160.873C173.373 161.556 172.454 161.91 171.526 161.91C170.864 161.91 170.198 161.73 169.605 161.361C168.18 160.476 167.543 158.733 168.063 157.139Z"
                fill="#DB9975"
              />
              <path
                d="M171.526 161.911C170.864 161.911 170.198 161.73 169.604 161.362C168.18 160.477 167.543 158.734 168.063 157.139L180.146 120.033C181.436 116.07 184.877 113.397 188.837 112.999L175.758 159.227L174.073 160.873C173.373 161.557 172.454 161.911 171.526 161.911Z"
                fill="#F7B081"
              />
              <path
                d="M188.744 136.972L196.774 111.112C198.354 106.021 203.637 103.075 208.799 104.407C211.452 105.091 213.732 106.861 215.053 109.262C216.374 111.664 216.647 114.536 215.804 117.144L209.983 135.142C209.59 136.356 208.591 137.276 207.349 137.568C206.107 137.859 204.802 137.479 203.911 136.566C203.265 135.905 202.4 135.535 201.476 135.524C200.536 135.512 199.679 135.863 199.018 136.509L194.77 140.659C194.07 141.342 193.151 141.696 192.223 141.696C191.569 141.696 190.911 141.52 190.323 141.16C188.899 140.289 188.249 138.564 188.744 136.972Z"
                fill="#DB9975"
              />
              <path
                d="M176.432 176.014L204.143 141.136C205.224 139.775 205.124 137.81 203.909 136.566C202.964 135.599 202.632 134.187 203.049 132.899L213.531 100.491C215.069 95.735 219.939 92.8072 224.86 93.6845C227.68 94.1864 230.158 95.8725 231.66 98.3111C233.162 100.75 233.554 103.722 232.733 106.466L227.1 125.306C221.793 143.059 211.213 158.401 196.506 169.673L181.501 181.172C180.843 181.677 180.063 181.924 179.286 181.924C178.338 181.924 177.395 181.555 176.686 180.834C175.397 179.522 175.288 177.454 176.432 176.014Z"
                fill="#DB9975"
              />
              <path
                d="M188.744 136.972L196.774 111.112C197.975 107.243 201.317 104.618 205.116 104.163L194.352 141.004C193.723 141.458 192.976 141.695 192.222 141.695C191.568 141.695 190.91 141.519 190.322 141.16C188.899 140.289 188.249 138.564 188.744 136.972Z"
                fill="#F7B081"
              />
              <path
                d="M179.802 181.882C179.63 181.907 179.458 181.924 179.286 181.924C178.338 181.924 177.395 181.555 176.686 180.834C175.397 179.522 175.288 177.454 176.433 176.014L204.143 141.136C205.224 139.775 205.124 137.81 203.909 136.567C202.964 135.599 202.632 134.187 203.049 132.9L213.531 100.491C214.83 96.4736 218.51 93.7707 222.587 93.5541L204.641 150.892L179.802 181.882Z"
                fill="#F7B081"
              />
              <path
                d="M133.686 206.506C133.756 205.779 135.512 188.537 145.337 174.579C154.083 162.153 166.309 156.476 169.503 155.151L193.925 131.296C198.164 127.155 204.981 127.234 209.122 131.474C209.262 131.618 209.398 131.764 209.528 131.913C212.7 135.544 212.617 140.998 209.573 144.736L179.286 181.923L205.143 156.293C209.458 152.015 212.664 146.75 214.484 140.953L218.7 127.52L218.691 127.528C219.203 126.109 219.684 124.674 220.12 123.218L227.812 97.4865C227.82 97.4607 227.828 97.4355 227.836 97.4097C229.502 92.2561 234.596 89.1029 239.952 89.9132C243.123 90.3922 245.919 92.2246 247.625 94.94C249.33 97.655 249.767 100.97 248.823 104.034L237.311 141.39C236.724 143.298 236.139 145.245 235.547 147.215C230.245 164.879 224.235 184.899 209.747 196.729L182.929 218.629V244.723C182.929 246.735 181.297 248.367 179.285 248.367H137.313C135.301 248.367 133.669 246.735 133.669 244.723V206.855C133.669 206.739 133.675 206.622 133.686 206.506Z"
                fill="#FFC89F"
              />
              <path
                d="M209.573 144.737C212.618 140.999 212.7 135.545 209.528 131.914C209.397 131.765 209.262 131.618 209.122 131.475C208.622 130.963 208.082 130.516 207.514 130.126L178.406 166.948C175.685 170.373 176.07 178.96 179.287 181.924L209.573 144.737Z"
                fill="#FFB98A"
              />
              <path
                d="M179.286 181.925L179.29 181.922L179.286 181.925Z"
                fill="#FFB98A"
              />
              <path
                d="M247.625 94.9406C246.094 92.5049 243.685 90.7833 240.917 90.1081L226.363 137.276C220.593 156 215.153 177.015 199.977 189.408L170.362 212.401V248.367H179.286C181.298 248.367 182.929 246.736 182.929 244.723V218.629L209.748 196.729C224.235 184.899 230.245 164.879 235.548 147.215C236.139 145.245 236.724 143.298 237.312 141.39L248.823 104.034C249.767 100.97 249.33 97.6556 247.625 94.9406Z"
                fill="#FFB98A"
              />
              <path
                d="M81.2494 157.139L69.1662 120.032C67.5865 115.18 62.7826 112.258 57.75 113.083C54.8198 113.564 52.2437 115.288 50.6824 117.814C49.1211 120.34 48.7306 123.415 49.6113 126.251L53.6107 139.132C53.7904 139.71 54.111 140.234 54.5443 140.658L75.2394 160.873C75.9394 161.556 76.8585 161.91 77.7863 161.91C78.4484 161.91 79.1144 161.73 79.7081 161.361C81.1328 160.476 81.7687 158.733 81.2494 157.139Z"
                fill="#DB9975"
              />
              <path
                d="M77.7857 161.911C78.4479 161.911 79.1139 161.73 79.7075 161.362C81.1318 160.477 81.7681 158.734 81.2488 157.139L69.1656 120.033C67.8754 116.07 64.4347 113.397 60.4751 112.999L73.5537 159.227L75.2393 160.873C75.9388 161.557 76.8584 161.911 77.7857 161.911Z"
                fill="#F7B081"
              />
              <path
                d="M60.5694 136.972L52.5395 111.113C50.9588 106.021 45.6765 103.075 40.5146 104.407C37.8608 105.091 35.5811 106.861 34.2602 109.263C32.9394 111.664 32.6659 114.537 33.5092 117.144L39.3298 135.142C39.7228 136.356 40.722 137.276 41.9642 137.568C43.2058 137.859 44.5111 137.479 45.4025 136.567C46.0486 135.906 46.9128 135.535 47.8367 135.525C48.7772 135.513 49.6346 135.863 50.2952 136.509L54.5434 140.659C55.2429 141.342 56.1624 141.696 57.0903 141.696C57.7441 141.696 58.4024 141.52 58.9906 141.16C60.414 140.289 61.0639 138.564 60.5694 136.972Z"
                fill="#DB9975"
              />
              <path
                d="M72.879 176.014L45.1688 141.136C44.087 139.775 44.1875 137.81 45.4025 136.566C46.3478 135.599 46.6791 134.187 46.2628 132.899L35.7807 100.491C34.2427 95.735 29.3723 92.8072 24.4514 93.6845C21.6315 94.1864 19.1531 95.8725 17.6505 98.3111C16.1485 100.75 15.7575 103.722 16.578 106.466L22.2105 125.306C27.5181 143.059 38.0979 158.401 52.8052 169.673L67.8099 181.172C68.4676 181.677 69.2478 181.924 70.025 181.924C70.9733 181.924 71.9162 181.555 72.6249 180.834C73.9146 179.522 74.0235 177.454 72.879 176.014Z"
                fill="#DB9975"
              />
              <path
                d="M60.5694 136.972L52.5395 111.112C51.3382 107.243 47.9965 104.618 44.1968 104.163L54.9611 141.004C55.5907 141.458 56.3373 141.695 57.0912 141.695C57.7451 141.695 58.4033 141.519 58.9916 141.16C60.4139 140.289 61.0639 138.564 60.5694 136.972Z"
                fill="#F7B081"
              />
              <path
                d="M69.5094 181.882C69.6808 181.907 69.8528 181.924 70.0253 181.924C70.9735 181.924 71.9164 181.555 72.6251 180.834C73.9144 179.522 74.0232 177.454 72.8787 176.014L45.1686 141.136C44.0867 139.775 44.1873 137.81 45.4022 136.567C46.3475 135.599 46.6788 134.187 46.2625 132.9L35.7805 100.491C34.481 96.4736 30.8017 93.7707 26.7246 93.5541L44.6706 150.892L69.5094 181.882Z"
                fill="#F7B081"
              />
              <path
                d="M115.626 206.506C115.556 205.779 113.8 188.537 103.975 174.579C95.2284 162.153 83.0024 156.476 79.8089 155.151L55.387 131.296C51.1481 127.155 44.3307 127.234 40.1899 131.474C40.0495 131.618 39.9145 131.764 39.7838 131.913C36.6117 135.544 36.6943 140.998 39.7386 144.736L70.0254 181.923L44.1684 156.293C39.8533 152.015 36.6472 146.75 34.8274 140.953L30.6119 127.52L30.6206 127.528C30.1086 126.109 29.6272 124.674 29.192 123.218L21.4992 97.4865C21.4914 97.4607 21.4837 97.4355 21.4754 97.4097C19.8102 92.2561 14.7153 89.1029 9.35964 89.9132C6.18898 90.3922 3.39237 92.2246 1.6868 94.94C-0.018757 97.655 -0.45547 100.97 0.488879 104.034L12.0003 141.39C12.5881 143.298 13.1725 145.245 13.7642 147.215C19.0669 164.879 25.0769 184.899 39.5643 196.729L66.383 218.629V244.723C66.383 246.735 68.0142 248.367 70.0263 248.367H111.999C114.011 248.367 115.642 246.735 115.642 244.723V206.855C115.643 206.739 115.637 206.622 115.626 206.506Z"
                fill="#FFC89F"
              />
              <path
                d="M103.976 174.58C95.2292 162.153 83.0032 156.476 79.8097 155.151L55.3878 131.296C51.1489 127.155 44.3315 127.235 40.1908 131.474C40.0504 131.618 39.9153 131.765 39.7846 131.914C39.7832 131.915 39.7822 131.917 39.7808 131.919L69.1498 162.153C69.1498 162.153 82.9784 167.233 92.3607 180.563C101.743 193.893 103.364 210.742 103.364 210.742V237.804V248.367H112C114.012 248.367 115.643 246.736 115.643 244.724V206.856C115.643 206.739 115.637 206.623 115.626 206.507C115.557 205.779 113.8 188.537 103.976 174.58Z"
                fill="#FFB98A"
              />
              <path
                d="M141.741 54.8196L129.13 69.2672L142.397 85.4906V86.1007H131.333L121.161 73.0498V86.1007H112.593V33.1157L121.161 38.3495V65.7987L131.033 54.2095H141.741V54.8196Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_244_954"
                  x1="198.693"
                  y1="54.6408"
                  x2="48.8448"
                  y2="55.4687"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF2DEA" />
                  <stop offset="0.984375" stopColor="#FF3D43" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </Container>
  );
}
