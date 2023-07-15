import Image from "next/image";
import Container from "@/components/Container";
import SplashContainer from "@/components/SplashContainer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReportViolationForm from "@/components/forms/ReportViolationForm";
import NeedHelpCTA from "@/components/NeedHelpCTA";
import { NextSeo } from "next-seo";

export default function SubmitIncident() {
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
              <div className="max-w-3xl flex flex-col space-y-4 justify-end items-center mx-auto">
                <Image
                  src="/images/kim-center-logo.png"
                  alt="Kreative Incidents Manager logo in Black and White"
                  className="w-[25%] h-auto"
                  width={300}
                  height={200}
                />
                <h1 className="text-6xl sm:text-7xl font-chedros">
                  REPORT A VIOLATION
                </h1>
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
