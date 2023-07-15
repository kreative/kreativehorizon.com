import Image from "next/image";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CommunityForm from "@/components/CommunityForm";
import LogoCloud6 from "@/components/LogoCloud6";
import { NextSeo } from "next-seo";

export default function Community() {
  return (
    <div>
      <NextSeo
        title="Community"
        description="Join the global Kreative Horizon community Discord today and start collaborating with other builders today!"
      />
      <Navbar />
      <main>
        <Container>
          <div className="grid grid-cols-2 gap-8 my-24">
            <div className="col-span-1 flex flex-col justify-start items-start space-y-2">
              <p className="text-2xl tracking-wide font-guthen">
                Our community
              </p>
              <h1 className="text-7xl font-chedros">
                JOIN OTHER BUILDERS ON THE{" "}
                <span>
                  <Image
                    src="/images/khz_3d_logo.png"
                    alt="Kreative Horizon 3D logo"
                    className="w-14 mx-2 h-auto inline"
                    width={100}
                    height={100}
                  />
                </span>{" "}
                KREATIVE HORIZON{" "}
                <span>
                  <Image
                    src="/images/discord-logo.png"
                    alt="Discord Message logo"
                    className="w-20 h-auto inline"
                    width={100}
                    height={100}
                  />
                </span>{" "}
                DISCORD
              </h1>
              <p className="text-lg text-horizon-grey-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div className="col-span-1">
              <div className="p-8 bg-horizon-grey-100 rounded-2xl border border-horizon-grey-300">
                <CommunityForm />
              </div>
            </div>
          </div>
        </Container>
        <div className="my-12">
          <LogoCloud6 />
        </div>
      </main>
      <Footer />
    </div>
  );
}
