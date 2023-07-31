import Link from "next/link";
import { useRouter } from "next/router";
import Container from "@/components/Container";
import SplashContainer from "@/components/SplashContainer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReportViolationForm from "@/components/forms/ReportViolationForm";
import NeedHelpCTA from "@/components/NeedHelpCTA";
import SuccessAlert from "@/components/SuccessAlert";
import { NextSeo } from "next-seo";

export default function SubmitIncident() {
  const router = useRouter();
  const success =
    router.query?.form_completed && router.query.form_completed === "true";

  return (
    <div>
      <NextSeo
        title="Submit Incident | Kreative Incidents Manager"
        description="Submit an incident to the Kreative Incidents Manager to report a violation of the Kreative Code of Conduct."
      />
      <Navbar />
      <main>
        <SplashContainer>
          <div className="bg-gradient-to-b from-horizon-orange to-transparent pt-44 pb-32">
            <Container>
              <div className="max-w-2xl flex flex-col space-y-4 justify-end items-center mx-auto">
                <svg
                  className="w-[50%] sm:w-[30%] h-auto"
                  viewBox="0 0 224 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.3189 24.4932L60.097 14.7047V14.2913H52.6429L45.7712 22.1432V3.54601L39.8076 0V35.8981H45.7712V27.0559L52.8518 35.8981H60.5537V35.4848L51.3189 24.4932ZM61.3609 35.8981H67.3228V25.2372C67.3228 21.7651 69.2699 19.7405 72.2916 19.7405H74.3626L75.9558 13.9149H72.8722C70.0984 13.9149 68.2698 15.5261 67.3228 17.4328H67.1581L66.6607 14.2913H61.3609V35.8981ZM85.4862 36.2692C91.4074 36.2692 94.8432 32.8411 95.4238 28.9556H89.2496C88.8778 29.9476 87.8423 31.105 85.4827 31.105C82.585 31.105 81.3016 29.3285 81.2591 26.8079H95.7088V24.4527C95.7088 18.5849 91.9827 13.9149 85.3588 13.9149C78.3189 13.9149 74.7591 18.9965 74.7591 25.1123C74.7627 31.3108 78.6552 36.2692 85.4862 36.2692ZM81.3051 22.7958C81.4291 20.729 82.6292 19.1179 85.3623 19.1179C87.8883 19.1179 89.0796 20.729 89.2124 22.7958H81.3051ZM103.69 36.2692C106.381 36.2692 108.293 35.3194 109.486 33.9562H109.652V35.6501L115.821 35.8981V21.6824C115.821 17.1795 112.261 13.9149 106.34 13.9149C99.9678 13.9149 97.024 18.2718 97.024 22.3226L102.986 21.4432C102.986 20.1205 104.145 19.0457 106.133 19.0457C108.493 19.0457 109.445 20.2031 109.445 21.6841V23.4624C108.576 23.1722 106.424 22.8415 104.807 22.8415C98.8455 22.8415 96.1124 25.4799 96.1124 29.4956C96.1124 33.3353 98.8083 36.2692 103.69 36.2692ZM105.305 31.3108C103.4 31.3108 102.407 30.4014 102.407 29.1631C102.407 28.0058 103.483 27.0964 105.553 27.0964C106.885 27.0755 108.208 27.3146 109.447 27.8V28.0075C109.445 29.7823 107.914 31.3108 105.305 31.3108ZM127.416 36.2692C129.444 36.2692 131.133 35.8981 131.804 35.6501V30.3592H131.39C130.728 30.6055 130.027 30.7313 129.32 30.7303C127.416 30.7303 126.545 29.8632 126.545 27.8387V19.7001H131.721V14.2861H126.545V6.85457H126.132L120.459 8.90021V14.2913H116.65V19.7001H120.169V29.3742C120.169 33.2949 122.406 36.2692 127.416 36.2692ZM137.297 12.0962C139.739 12.0962 141.148 10.689 141.148 8.37781C141.148 6.10526 139.732 4.69987 137.297 4.69987C134.772 4.69987 133.447 6.10702 133.447 8.37781C133.447 10.6908 134.772 12.0962 137.297 12.0962ZM134.068 35.8981H140.44V14.2861H134.068V35.8981ZM148.682 35.8981H156.839L163.629 14.7047V14.2913H157.17L152.906 29.9124H152.739L148.351 14.2913H141.802V14.7047L148.682 35.8981ZM173.331 36.2692C179.251 36.2692 182.688 32.8411 183.267 28.9556H177.098C176.727 29.9476 175.691 31.105 173.331 31.105C170.432 31.105 169.149 29.3285 169.108 26.8079H183.558V24.4527C183.558 18.5849 179.84 13.9149 173.208 13.9149C166.168 13.9149 162.608 18.9965 162.608 25.1123C162.608 31.3108 166.499 36.2692 173.331 36.2692ZM169.149 22.7958C169.274 20.729 170.474 19.1179 173.208 19.1179C175.732 19.1179 176.934 20.729 177.058 22.7958H169.149Z"
                    fill="black"
                  />
                  <path
                    d="M2.2824 47.5063H0V44.8856H2.2824V47.5063ZM2.11285 63.7328H0.16955V49.5346H2.11285V63.7328Z"
                    fill="black"
                  />
                  <path
                    d="M6.44329 63.7328H4.49999V49.5346H6.44329V53.7522C6.62154 53.0482 6.88021 52.4129 7.21931 51.8463C7.56275 51.2753 7.97359 50.7902 8.4518 50.391C8.93002 49.9918 9.4691 49.6849 10.069 49.4702C10.669 49.2556 11.3168 49.1483 12.0123 49.1483C12.8384 49.1483 13.5818 49.3007 14.2426 49.6054C14.9034 49.9102 15.4642 50.3481 15.925 50.919C16.3902 51.4857 16.7467 52.1746 16.9945 52.986C17.2423 53.793 17.3662 54.7009 17.3662 55.7097V63.7328H15.4229V55.7097C15.4229 54.937 15.3316 54.2523 15.149 53.6556C14.9664 53.0547 14.6991 52.5503 14.3469 52.1425C13.9948 51.7303 13.5579 51.4191 13.0362 51.2088C12.5188 50.9984 11.9232 50.8933 11.2494 50.8933C10.519 50.8933 9.85819 51.0156 9.26694 51.2603C8.6757 51.5007 8.17139 51.8441 7.75404 52.2906C7.33669 52.737 7.01281 53.2779 6.78239 53.9132C6.55633 54.5442 6.44329 55.2504 6.44329 56.0317V63.7328Z"
                    fill="black"
                  />
                  <path
                    d="M21.2797 56.6305C21.2797 57.5105 21.3949 58.3047 21.6253 59.013C21.8557 59.7213 22.184 60.3244 22.61 60.8224C23.0404 61.3203 23.5577 61.7045 24.162 61.975C24.7707 62.2411 25.4489 62.3742 26.1966 62.3742C26.8314 62.3742 27.4009 62.2797 27.9052 62.0909C28.4095 61.902 28.8486 61.6401 29.2224 61.3053C29.5963 60.9662 29.905 60.5648 30.1484 60.1012C30.3962 59.6376 30.5788 59.1289 30.6962 58.5751H32.6395C32.5047 59.3736 32.2635 60.1119 31.9157 60.7902C31.5679 61.4684 31.1201 62.0544 30.5723 62.548C30.0289 63.0417 29.3898 63.428 28.6551 63.7071C27.9204 63.9818 27.0987 64.1192 26.1901 64.1192C25.5076 64.1192 24.862 64.0376 24.2533 63.8745C23.649 63.7157 23.0926 63.4839 22.5839 63.1791C22.0796 62.87 21.6253 62.4965 21.221 62.0587C20.821 61.6208 20.4798 61.125 20.1972 60.5712C19.919 60.0132 19.7059 59.4036 19.5581 58.7425C19.4103 58.0814 19.3364 57.3774 19.3364 56.6305C19.3364 55.8836 19.4103 55.1796 19.5581 54.5185C19.7059 53.8574 19.919 53.25 20.1972 52.6962C20.4798 52.1425 20.821 51.6466 21.221 51.2088C21.6253 50.7666 22.0796 50.3932 22.5839 50.0884C23.0926 49.7836 23.649 49.5518 24.2533 49.393C24.862 49.2298 25.5076 49.1483 26.1901 49.1483C27.0987 49.1483 27.9182 49.2878 28.6486 49.5668C29.3833 49.8415 30.0224 50.2236 30.5658 50.713C31.1136 51.2023 31.5614 51.7862 31.9092 52.4644C32.2569 53.1384 32.4982 53.8746 32.633 54.673H30.6897C30.5723 54.1235 30.3897 53.6192 30.1419 53.1598C29.8985 52.6962 29.5898 52.297 29.2159 51.9622C28.842 51.6273 28.403 51.3655 27.8987 51.1766C27.3987 50.9877 26.8314 50.8933 26.1966 50.8933C25.4445 50.8933 24.7642 51.0285 24.1555 51.2989C23.5512 51.5651 23.0361 51.9471 22.61 52.4451C22.184 52.9388 21.8557 53.5397 21.6253 54.248C21.3949 54.9563 21.2797 55.7505 21.2797 56.6305Z"
                    fill="black"
                  />
                  <path
                    d="M36.7986 47.5063H34.5162V44.8856H36.7986V47.5063ZM36.629 63.7328H34.6857V49.5346H36.629V63.7328Z"
                    fill="black"
                  />
                  <path
                    d="M52.2541 44.6731V63.7328H50.3108V59.1611C50.1282 59.9166 49.8652 60.6013 49.5217 61.2151C49.1783 61.8247 48.7674 62.3463 48.2892 62.7798C47.8154 63.2091 47.2785 63.5397 46.6785 63.7715C46.0829 64.0033 45.4417 64.1192 44.7548 64.1192C44.1592 64.1192 43.594 64.0355 43.0593 63.8681C42.5289 63.7049 42.0376 63.4688 41.5855 63.1598C41.1377 62.8464 40.7334 62.4686 40.3726 62.0265C40.0117 61.58 39.7052 61.0799 39.4531 60.5262C39.2009 59.9724 39.0075 59.3693 38.8727 58.7168C38.7379 58.06 38.6706 57.3646 38.6706 56.6305C38.6706 55.8964 38.7379 55.2032 38.8727 54.5507C39.0075 53.8939 39.2009 53.2886 39.4531 52.7348C39.7052 52.1811 40.0117 51.6831 40.3726 51.241C40.7334 50.7988 41.1377 50.4232 41.5855 50.1141C42.0376 49.8008 42.5289 49.5625 43.0593 49.3994C43.594 49.232 44.1592 49.1483 44.7548 49.1483C45.4417 49.1483 46.0829 49.2642 46.6785 49.496C47.2785 49.7278 47.8154 50.0605 48.2892 50.494C48.7674 50.9233 49.1783 51.4427 49.5217 52.0523C49.8652 52.6576 50.1282 53.338 50.3108 54.0935V44.6731H52.2541ZM50.3108 56.6305C50.3108 55.7548 50.1934 54.9628 49.9586 54.2545C49.7239 53.5419 49.3913 52.9345 48.9609 52.4322C48.5305 51.9257 48.011 51.535 47.4024 51.2603C46.7937 50.9856 46.1155 50.8482 45.3678 50.8482C44.62 50.8482 43.9505 50.9791 43.3593 51.241C42.7724 51.5028 42.2746 51.8827 41.8659 52.3807C41.4616 52.8744 41.1508 53.4796 40.9334 54.1965C40.7204 54.9091 40.6139 55.7204 40.6139 56.6305C40.6139 57.5406 40.7204 58.354 40.9334 59.0709C41.1508 59.7878 41.4638 60.3952 41.8724 60.8932C42.2811 61.3869 42.7789 61.7646 43.3658 62.0265C43.9527 62.2883 44.62 62.4193 45.3678 62.4193C46.1155 62.4193 46.7937 62.2819 47.4024 62.0072C48.011 61.7324 48.5305 61.3418 48.9609 60.8352C49.3913 60.3287 49.7239 59.7213 49.9586 59.013C50.1934 58.3004 50.3108 57.5062 50.3108 56.6305Z"
                    fill="black"
                  />
                  <path
                    d="M67.5822 59.174C67.3822 59.9552 67.0866 60.6528 66.6954 61.2667C66.3041 61.8762 65.8346 62.3935 65.2868 62.8185C64.739 63.2392 64.1195 63.5611 63.4283 63.7843C62.7414 64.0076 61.9958 64.1192 61.1915 64.1192C60.5046 64.1192 59.8547 64.0376 59.2417 63.8745C58.633 63.7114 58.0722 63.4774 57.5592 63.1726C57.0506 62.8636 56.5941 62.4901 56.1898 62.0522C55.7855 61.6101 55.442 61.1121 55.1595 60.5584C54.8769 60.0003 54.6595 59.3907 54.5073 58.7297C54.3595 58.0643 54.2856 57.3581 54.2856 56.6112C54.2856 55.8643 54.3595 55.1624 54.5073 54.5056C54.6552 53.8488 54.8682 53.2435 55.1464 52.6898C55.4246 52.136 55.7637 51.6402 56.1637 51.2023C56.568 50.7645 57.0223 50.3932 57.5266 50.0884C58.0309 49.7836 58.5831 49.5518 59.183 49.393C59.7873 49.2298 60.4307 49.1483 61.1133 49.1483C61.761 49.1483 62.3697 49.2234 62.9392 49.3736C63.513 49.5239 64.0412 49.745 64.5238 50.0369C65.0107 50.3245 65.4455 50.6786 65.828 51.0993C66.215 51.5157 66.5432 51.9922 66.8127 52.5288C67.0823 53.0611 67.2888 53.6492 67.4322 54.2931C67.5757 54.937 67.6474 55.6282 67.6474 56.3665C67.6474 56.5125 67.6431 56.6606 67.6344 56.8108C67.63 56.961 67.6192 57.122 67.6018 57.2937H56.255C56.3072 58.0707 56.4615 58.7726 56.718 59.3993C56.9745 60.0261 57.318 60.5605 57.7483 61.0027C58.1787 61.4448 58.6874 61.7839 59.2743 62.02C59.8612 62.2561 60.5133 62.3742 61.2306 62.3742C62.3088 62.3742 63.2152 62.1059 63.9499 61.5693C64.6847 61.0284 65.2477 60.23 65.6389 59.174H67.5822ZM65.665 55.6196C65.6041 54.8726 65.452 54.2073 65.2085 53.6234C64.9694 53.0353 64.6542 52.5395 64.263 52.136C63.8717 51.7325 63.4109 51.4256 62.8805 51.2152C62.3501 51.0006 61.7632 50.8933 61.1198 50.8933C60.4459 50.8933 59.8308 51.0027 59.2743 51.2217C58.7178 51.4406 58.2309 51.754 57.8136 52.1618C57.4006 52.5696 57.0615 53.0654 56.7963 53.6492C56.5354 54.233 56.3637 54.8898 56.2811 55.6196H65.665Z"
                    fill="black"
                  />
                  <path
                    d="M71.6292 63.7328H69.6859V49.5346H71.6292V53.7522C71.8074 53.0482 72.0661 52.4129 72.4052 51.8463C72.7487 51.2753 73.1595 50.7902 73.6377 50.391C74.1159 49.9918 74.655 49.6849 75.255 49.4702C75.8549 49.2556 76.5027 49.1483 77.1983 49.1483C78.0243 49.1483 78.7677 49.3007 79.4285 49.6054C80.0893 49.9102 80.6501 50.3481 81.1109 50.919C81.5761 51.4857 81.9326 52.1746 82.1804 52.986C82.4282 53.793 82.5521 54.7009 82.5521 55.7097V63.7328H80.6088V55.7097C80.6088 54.937 80.5175 54.2523 80.3349 53.6556C80.1523 53.0547 79.885 52.5503 79.5328 52.1425C79.1807 51.7303 78.7438 51.4191 78.2221 51.2088C77.7047 50.9984 77.1091 50.8933 76.4353 50.8933C75.7049 50.8933 75.0441 51.0156 74.4529 51.2603C73.8616 51.5007 73.3573 51.8441 72.9399 52.2906C72.5226 52.737 72.1987 53.2779 71.9683 53.9132C71.7422 54.5442 71.6292 55.2504 71.6292 56.0317V63.7328Z"
                    fill="black"
                  />
                  <path
                    d="M93.0894 63.662C92.0808 63.9625 91.1679 64.1127 90.3506 64.1127C89.0029 64.1127 87.9747 63.7028 87.2661 62.8829C86.5618 62.0587 86.2097 60.846 86.2097 59.2448V51.1637H84.0772V49.5346H86.2097V46.2636H88.1529V49.5346H93.0894V51.1637H88.1529V59.2512C88.1529 60.3201 88.3551 61.1121 88.7594 61.6272C89.1637 62.1424 89.7963 62.3999 90.6571 62.3999C90.9701 62.3999 91.3244 62.3677 91.72 62.3034C92.12 62.2347 92.5765 62.1316 93.0894 61.9943V63.662Z"
                    fill="black"
                  />
                  <path
                    d="M100.558 49.1483C101.471 49.1483 102.294 49.2534 103.029 49.4638C103.764 49.6741 104.39 49.9746 104.907 50.3653C105.429 50.7516 105.829 51.2217 106.107 51.7754C106.39 52.3249 106.531 52.9388 106.531 53.617H104.627C104.627 53.2006 104.529 52.8207 104.333 52.4773C104.142 52.1339 103.868 51.8398 103.512 51.5951C103.16 51.3504 102.731 51.1616 102.227 51.0285C101.727 50.8911 101.171 50.8224 100.558 50.8224C99.9881 50.8224 99.4577 50.8825 98.9664 51.0027C98.4795 51.1186 98.0556 51.2839 97.6948 51.4985C97.3383 51.7132 97.0579 51.9729 96.8536 52.2777C96.6536 52.5782 96.5536 52.913 96.5536 53.2822C96.5536 53.5483 96.6058 53.7823 96.7101 53.984C96.8188 54.1815 96.9644 54.3532 97.147 54.4992C97.334 54.6451 97.5513 54.7696 97.7991 54.8726C98.0513 54.9757 98.3208 55.0658 98.6078 55.1431C98.899 55.216 99.2012 55.2804 99.5142 55.3362C99.8272 55.3921 100.14 55.4436 100.453 55.4908L101.347 55.6324C101.751 55.6968 102.173 55.7698 102.612 55.8514C103.055 55.9286 103.488 56.0317 103.909 56.1605C104.331 56.2892 104.733 56.4502 105.116 56.6434C105.498 56.8366 105.833 57.077 106.12 57.3646C106.407 57.6522 106.635 57.9977 106.805 58.4013C106.974 58.8005 107.059 59.2727 107.059 59.8179C107.059 60.5047 106.918 61.1143 106.635 61.6466C106.353 62.1789 105.942 62.6296 105.403 62.9988C104.868 63.3637 104.212 63.6405 103.433 63.8294C102.66 64.0226 101.779 64.1192 100.792 64.1192C99.7707 64.1192 98.8621 64.0162 98.0665 63.8101C97.2753 63.6083 96.6079 63.3143 96.0645 62.9279C95.5211 62.5373 95.1081 62.0587 94.8255 61.492C94.5429 60.9211 94.4016 60.2707 94.4016 59.541H96.2993C96.2993 60.0046 96.3971 60.4167 96.5927 60.7773C96.7927 61.1336 97.0818 61.4362 97.46 61.6852C97.8426 61.9342 98.3121 62.1231 98.8686 62.2518C99.4251 62.3806 100.064 62.445 100.786 62.445C101.455 62.445 102.06 62.3892 102.599 62.2776C103.138 62.1617 103.596 61.9943 103.975 61.7753C104.357 61.5564 104.651 61.286 104.855 60.964C105.059 60.6421 105.162 60.275 105.162 59.8629C105.162 59.5496 105.105 59.277 104.992 59.0452C104.879 58.8091 104.722 58.6052 104.522 58.4335C104.322 58.2617 104.088 58.1158 103.818 57.9956C103.549 57.8754 103.257 57.7724 102.944 57.6865C102.631 57.5964 102.303 57.5191 101.96 57.4547C101.621 57.3903 101.279 57.3302 100.936 57.2744L100.036 57.1199C99.6533 57.0555 99.2555 56.9847 98.8425 56.9074C98.4295 56.8301 98.023 56.7314 97.6231 56.6112C97.2231 56.491 96.8427 56.3429 96.4819 56.1669C96.1254 55.9909 95.8102 55.7741 95.5363 55.5165C95.2668 55.2547 95.0516 54.9456 94.8907 54.5893C94.7342 54.2287 94.656 53.808 94.656 53.3272C94.656 52.6919 94.7972 52.1167 95.0798 51.6016C95.3668 51.0864 95.7689 50.6486 96.2862 50.288C96.8036 49.9231 97.4231 49.6419 98.1448 49.4445C98.8708 49.247 99.6751 49.1483 100.558 49.1483Z"
                    fill="black"
                  />
                  <path
                    d="M116.615 63.7328H114.672V49.5346H116.615V53.6299C116.784 52.943 117.026 52.3249 117.339 51.7754C117.656 51.2217 118.032 50.7516 118.467 50.3653C118.902 49.9746 119.391 49.6741 119.934 49.4638C120.482 49.2534 121.069 49.1483 121.695 49.1483C122.347 49.1483 122.943 49.262 123.482 49.4895C124.025 49.7171 124.501 50.0455 124.91 50.4747C125.323 50.904 125.662 51.4277 125.927 52.0459C126.197 52.6597 126.386 53.353 126.494 54.1257C126.638 53.3659 126.864 52.6812 127.173 52.0716C127.481 51.4578 127.857 50.934 128.301 50.5005C128.749 50.0669 129.257 49.7342 129.827 49.5024C130.396 49.2663 131.014 49.1483 131.679 49.1483C132.435 49.1483 133.116 49.3007 133.72 49.6054C134.328 49.9102 134.844 50.3481 135.265 50.919C135.691 51.4857 136.017 52.1746 136.243 52.986C136.474 53.793 136.589 54.7009 136.589 55.7097V63.7328H134.646V55.7097C134.646 54.937 134.563 54.2523 134.398 53.6556C134.237 53.0547 133.998 52.5503 133.681 52.1425C133.368 51.7303 132.979 51.4191 132.513 51.2088C132.048 50.9984 131.513 50.8933 130.909 50.8933C130.257 50.8933 129.666 51.0156 129.135 51.2603C128.605 51.5007 128.151 51.8441 127.773 52.2906C127.399 52.737 127.11 53.2779 126.905 53.9132C126.701 54.5442 126.599 55.2504 126.599 56.0317V63.7328H124.662V55.7097C124.662 54.937 124.579 54.2523 124.414 53.6556C124.253 53.0547 124.014 52.5503 123.697 52.1425C123.379 51.7303 122.988 51.4191 122.523 51.2088C122.058 50.9984 121.523 50.8933 120.919 50.8933C120.267 50.8933 119.675 51.0156 119.145 51.2603C118.615 51.5007 118.163 51.8441 117.789 52.2906C117.415 52.737 117.126 53.2779 116.921 53.9132C116.717 54.5442 116.615 55.2504 116.615 56.0317V63.7328Z"
                    fill="black"
                  />
                  <path
                    d="M138.916 54.2674C138.916 53.4904 139.063 52.7864 139.359 52.1553C139.659 51.5243 140.085 50.9877 140.637 50.5456C141.189 50.0991 141.857 49.7557 142.639 49.5153C143.426 49.2749 144.304 49.1547 145.274 49.1547C146.313 49.1547 147.243 49.2964 148.065 49.5797C148.891 49.8587 149.591 50.2622 150.164 50.7902C150.738 51.3182 151.177 51.9643 151.482 52.7284C151.786 53.4882 151.938 54.3489 151.938 55.3105V63.7328H149.995V59.7728C149.817 60.421 149.532 61.0112 149.141 61.5435C148.749 62.0758 148.273 62.533 147.713 62.9151C147.156 63.2971 146.528 63.5933 145.828 63.8037C145.132 64.014 144.391 64.1192 143.604 64.1192C142.83 64.1192 142.128 64.0183 141.498 63.8165C140.872 63.6148 140.335 63.3315 139.887 62.9666C139.444 62.5974 139.1 62.1553 138.857 61.6401C138.613 61.1207 138.492 60.5433 138.492 59.908C138.492 59.2727 138.616 58.7082 138.863 58.2145C139.116 57.7166 139.483 57.298 139.965 56.9589C140.452 56.6198 141.048 56.3622 141.752 56.1862C142.461 56.0102 143.272 55.9222 144.185 55.9222H149.995V55.3105C149.995 54.6237 149.886 54.0076 149.669 53.4625C149.452 52.9173 149.136 52.4558 148.723 52.0781C148.315 51.696 147.817 51.4041 147.23 51.2023C146.643 51.0006 145.98 50.8997 145.241 50.8997C144.524 50.8997 143.891 50.9813 143.343 51.1444C142.8 51.3032 142.343 51.5286 141.974 51.8205C141.604 52.1124 141.324 52.4666 141.133 52.8829C140.946 53.2951 140.852 53.7565 140.852 54.2674H138.916ZM144.172 57.5513C142.906 57.5513 141.963 57.7423 141.341 58.1244C140.72 58.5064 140.409 59.0838 140.409 59.8565C140.409 60.26 140.491 60.6227 140.657 60.9447C140.822 61.2624 141.061 61.5328 141.374 61.756C141.691 61.975 142.078 62.1424 142.535 62.2583C142.991 62.3742 143.511 62.4321 144.093 62.4321C144.641 62.4321 145.167 62.3828 145.671 62.284C146.176 62.181 146.645 62.0394 147.08 61.8591C147.519 61.6745 147.917 61.4534 148.273 61.1958C148.634 60.9383 148.941 60.6528 149.193 60.3394C149.449 60.0218 149.647 59.6826 149.786 59.322C149.925 58.9572 149.995 58.5794 149.995 58.1888V57.5513H144.172Z"
                    fill="black"
                  />
                  <path
                    d="M156.2 63.7328H154.257V49.5346H156.2V53.7522C156.378 53.0482 156.637 52.4129 156.976 51.8463C157.32 51.2753 157.731 50.7902 158.209 50.391C158.687 49.9918 159.226 49.6849 159.826 49.4702C160.426 49.2556 161.074 49.1483 161.769 49.1483C162.595 49.1483 163.339 49.3007 163.999 49.6054C164.66 49.9102 165.221 50.3481 165.682 50.919C166.147 51.4857 166.504 52.1746 166.751 52.986C166.999 53.793 167.123 54.7009 167.123 55.7097V63.7328H165.18V55.7097C165.18 54.937 165.089 54.2523 164.906 53.6556C164.723 53.0547 164.456 52.5503 164.104 52.1425C163.752 51.7303 163.315 51.4191 162.793 51.2088C162.276 50.9984 161.68 50.8933 161.006 50.8933C160.276 50.8933 159.615 51.0156 159.024 51.2603C158.433 51.5007 157.928 51.8441 157.511 52.2906C157.094 52.737 156.77 53.2779 156.539 53.9132C156.313 54.5442 156.2 55.2504 156.2 56.0317V63.7328Z"
                    fill="black"
                  />
                  <path
                    d="M169.432 54.2674C169.432 53.4904 169.58 52.7864 169.876 52.1553C170.176 51.5243 170.602 50.9877 171.154 50.5456C171.706 50.0991 172.373 49.7557 173.156 49.5153C173.943 49.2749 174.821 49.1547 175.791 49.1547C176.83 49.1547 177.76 49.2964 178.582 49.5797C179.408 49.8587 180.108 50.2622 180.681 50.7902C181.255 51.3182 181.694 51.9643 181.999 52.7284C182.303 53.4882 182.455 54.3489 182.455 55.3105V63.7328H180.512V59.7728C180.334 60.421 180.049 61.0112 179.658 61.5435C179.266 62.0758 178.79 62.533 178.229 62.9151C177.673 63.2971 177.045 63.5933 176.345 63.8037C175.649 64.014 174.908 64.1192 174.121 64.1192C173.347 64.1192 172.645 64.0183 172.015 63.8165C171.389 63.6148 170.852 63.3315 170.404 62.9666C169.961 62.5974 169.617 62.1553 169.374 61.6401C169.13 61.1207 169.009 60.5433 169.009 59.908C169.009 59.2727 169.132 58.7082 169.38 58.2145C169.632 57.7166 170 57.298 170.482 56.9589C170.969 56.6198 171.565 56.3622 172.269 56.1862C172.978 56.0102 173.789 55.9222 174.701 55.9222H180.512V55.3105C180.512 54.6237 180.403 54.0076 180.186 53.4625C179.968 52.9173 179.653 52.4558 179.24 52.0781C178.832 51.696 178.334 51.4041 177.747 51.2023C177.16 51.0006 176.497 50.8997 175.758 50.8997C175.041 50.8997 174.408 50.9813 173.86 51.1444C173.317 51.3032 172.86 51.5286 172.491 51.8205C172.121 52.1124 171.841 52.4666 171.65 52.8829C171.463 53.2951 171.369 53.7565 171.369 54.2674H169.432ZM174.688 57.5513C173.423 57.5513 172.48 57.7423 171.858 58.1244C171.237 58.5064 170.926 59.0838 170.926 59.8565C170.926 60.26 171.008 60.6227 171.174 60.9447C171.339 61.2624 171.578 61.5328 171.891 61.756C172.208 61.975 172.595 62.1424 173.052 62.2583C173.508 62.3742 174.028 62.4321 174.61 62.4321C175.158 62.4321 175.684 62.3828 176.188 62.284C176.693 62.181 177.162 62.0394 177.597 61.8591C178.036 61.6745 178.434 61.4534 178.79 61.1958C179.151 60.9383 179.458 60.6528 179.71 60.3394C179.966 60.0218 180.164 59.6826 180.303 59.322C180.442 58.9572 180.512 58.5794 180.512 58.1888V57.5513H174.688Z"
                    fill="black"
                  />
                  <path
                    d="M198.096 49.5346V61.5435C198.096 62.2819 198.018 62.9795 197.862 63.6362C197.71 64.2887 197.49 64.8897 197.203 65.4392C196.916 65.993 196.566 66.4888 196.153 66.9266C195.74 67.3688 195.275 67.7422 194.758 68.047C194.24 68.3561 193.673 68.5922 193.056 68.7553C192.443 68.9185 191.791 69 191.099 69C190.482 69 189.893 68.9356 189.332 68.8068C188.776 68.6781 188.256 68.4935 187.774 68.2531C187.295 68.0127 186.863 67.7229 186.476 67.3838C186.089 67.0447 185.756 66.6648 185.478 66.2441C185.204 65.8277 184.993 65.3748 184.846 64.8854C184.698 64.3961 184.624 63.8831 184.624 63.3465H186.567C186.567 63.9131 186.682 64.439 186.913 64.9241C187.143 65.4091 187.461 65.8298 187.865 66.1861C188.273 66.5424 188.754 66.8215 189.306 67.0232C189.862 67.225 190.462 67.3259 191.106 67.3259C191.606 67.3259 192.077 67.2615 192.521 67.1327C192.964 67.0082 193.373 66.8279 193.747 66.5918C194.121 66.3557 194.456 66.0681 194.751 65.729C195.051 65.3898 195.303 65.0056 195.508 64.5764C195.716 64.1471 195.875 63.6792 195.984 63.1726C196.097 62.6618 196.153 62.1188 196.153 61.5435V58.7297C195.971 59.4508 195.705 60.1055 195.358 60.6936C195.014 61.2774 194.601 61.7753 194.119 62.1874C193.64 62.5996 193.099 62.9172 192.495 63.1404C191.895 63.3637 191.247 63.4753 190.552 63.4753C189.965 63.4753 189.408 63.3959 188.882 63.237C188.356 63.0782 187.869 62.8507 187.421 62.5545C186.974 62.254 186.571 61.8913 186.215 61.4663C185.858 61.0413 185.554 60.5648 185.302 60.0368C185.05 59.5045 184.856 58.925 184.722 58.2982C184.587 57.6715 184.519 57.0083 184.519 56.3085C184.519 55.6088 184.587 54.9456 184.722 54.3189C184.856 53.6921 185.05 53.1148 185.302 52.5867C185.554 52.0545 185.858 51.5758 186.215 51.1508C186.576 50.7258 186.978 50.3653 187.421 50.0691C187.869 49.7729 188.356 49.5453 188.882 49.3865C189.413 49.2277 189.971 49.1483 190.558 49.1483C191.254 49.1483 191.901 49.2599 192.501 49.4831C193.106 49.7063 193.647 50.024 194.125 50.4361C194.603 50.8439 195.014 51.3397 195.358 51.9235C195.705 52.5073 195.971 53.1598 196.153 53.881V49.5346H198.096ZM196.153 56.3085C196.153 55.4843 196.034 54.7374 195.795 54.0677C195.56 53.3938 195.225 52.8186 194.79 52.3421C194.36 51.8656 193.836 51.4985 193.219 51.241C192.606 50.9791 191.921 50.8482 191.165 50.8482C190.43 50.8482 189.771 50.9727 189.189 51.2217C188.606 51.4663 188.113 51.8226 187.708 52.2906C187.304 52.7585 186.995 53.3315 186.782 54.0098C186.569 54.6838 186.463 55.45 186.463 56.3085C186.463 57.1671 186.569 57.9355 186.782 58.6137C186.995 59.2877 187.304 59.8608 187.708 60.333C188.113 60.8009 188.606 61.1593 189.189 61.4083C189.771 61.653 190.43 61.7753 191.165 61.7753C191.921 61.7753 192.606 61.6466 193.219 61.389C193.836 61.1271 194.362 60.758 194.797 60.2815C195.232 59.8007 195.566 59.2255 195.801 58.5558C196.036 57.8818 196.153 57.1328 196.153 56.3085Z"
                    fill="black"
                  />
                  <path
                    d="M213.442 59.174C213.242 59.9552 212.946 60.6528 212.555 61.2667C212.164 61.8762 211.694 62.3935 211.146 62.8185C210.599 63.2392 209.979 63.5611 209.288 63.7843C208.601 64.0076 207.855 64.1192 207.051 64.1192C206.364 64.1192 205.714 64.0376 205.101 63.8745C204.493 63.7114 203.932 63.4774 203.419 63.1726C202.91 62.8636 202.454 62.4901 202.049 62.0522C201.645 61.6101 201.302 61.1121 201.019 60.5584C200.736 60.0003 200.519 59.3907 200.367 58.7297C200.219 58.0643 200.145 57.3581 200.145 56.6112C200.145 55.8643 200.219 55.1624 200.367 54.5056C200.515 53.8488 200.728 53.2435 201.006 52.6898C201.284 52.136 201.623 51.6402 202.023 51.2023C202.428 50.7645 202.882 50.3932 203.386 50.0884C203.89 49.7836 204.443 49.5518 205.043 49.393C205.647 49.2298 206.29 49.1483 206.973 49.1483C207.621 49.1483 208.229 49.2234 208.799 49.3736C209.373 49.5239 209.901 49.745 210.383 50.0369C210.87 50.3245 211.305 50.6786 211.688 51.0993C212.074 51.5157 212.403 51.9922 212.672 52.5288C212.942 53.0611 213.148 53.6492 213.292 54.2931C213.435 54.937 213.507 55.6282 213.507 56.3665C213.507 56.5125 213.503 56.6606 213.494 56.8108C213.49 56.961 213.479 57.122 213.461 57.2937H202.115C202.167 58.0707 202.321 58.7726 202.578 59.3993C202.834 60.0261 203.177 60.5605 203.608 61.0027C204.038 61.4448 204.547 61.7839 205.134 62.02C205.721 62.2561 206.373 62.3742 207.09 62.3742C208.168 62.3742 209.075 62.1059 209.809 61.5693C210.544 61.0284 211.107 60.23 211.498 59.174H213.442ZM211.525 55.6196C211.464 54.8726 211.312 54.2073 211.068 53.6234C210.829 53.0353 210.514 52.5395 210.122 52.136C209.731 51.7325 209.27 51.4256 208.74 51.2152C208.21 51.0006 207.623 50.8933 206.979 50.8933C206.305 50.8933 205.69 51.0027 205.134 51.2217C204.577 51.4406 204.09 51.754 203.673 52.1618C203.26 52.5696 202.921 53.0654 202.656 53.6492C202.395 54.233 202.223 54.8898 202.141 55.6196H211.525Z"
                    fill="black"
                  />
                  <path
                    d="M217.489 63.7328H215.545V49.5346H217.489V54.1643C217.654 53.426 217.895 52.7713 218.213 52.2004C218.534 51.6252 218.93 51.1401 219.399 50.7452C219.873 50.3502 220.423 50.0497 221.049 49.8437C221.675 49.6376 222.375 49.5346 223.149 49.5346H223.808V51.3826H223.156C222.13 51.3826 221.258 51.4942 220.541 51.7175C219.823 51.9407 219.239 52.2755 218.786 52.722C218.334 53.1684 218.004 53.7286 217.795 54.4026C217.591 55.0722 217.489 55.8578 217.489 56.7593V63.7328Z"
                    fill="black"
                  />
                </svg>
                <h1 className="text-6xl sm:text-7xl font-chedros text-center">
                  REPORT A VIOLATION
                </h1>
                <p className="text-lg text-horizon-grey-800 text-center">
                  Please use this form to report a violation of the{" "}
                  <Link href="/policies/code-of-conduct" className="underline">
                    Kreative Events Code of Conduct
                  </Link>
                  . You have the right to remain anonymouse. We will not share
                  your information with anyone, and we will not take any action
                  without your consent.
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                {success && <SuccessAlert />}
              </div>
            </Container>
          </div>
        </SplashContainer>
        <div className="bg-gradient-to-b from-transparent to-horizon-pink-200">
          <Container>
            <div className="max-w-2xl mx-auto">
              <div className="p-8 rounded-xl bg-white bg-opacity-60 backdrop-blur-lg border border-horizon-grey-300 -mt-24 z-10">
                <ReportViolationForm />
              </div>
            </div>
          </Container>
          <NeedHelpCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
