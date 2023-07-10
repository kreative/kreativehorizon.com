import Image from "next/image";
import Container from "./Container";

export default function FloatingCTA() {
  return (
    <Container>
      <div className="w-full bg-floating-cta-w-logo bg-cover bg-right rounded-[2rem] grid grid-cols-10 gap-4 pl-12 pt-12 z-10">
        <div className="col-span-6 pt-36 pb-24">
          <p className="text-2xl font-guthen tracking-wide text-white mb-2">
            Horizon Newsletter
          </p>
          <h2 className="text-5xl text-white font-chedros">
            YOU NEED MORE EMAILS. JOIN THE LETTER.
          </h2>
          <p className="text-base text-white w-[85%] mb-4">
            Your inbox could use a few more things to read. Get new events,
            programs, discounts, and giveaways straight to your phone. We
            promise it&apos;ll be worth it :)
          </p>
          <span className="bg-white bg-opacity-[.85] rounded-lg pl-4 pr-1 py-3">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-transparent mr-2 py-2 placeholder-[#E33232] placeholder-opacity-75 text-[#E33232] text-opacity-85 w-[35%]"
            />
            <button className="bg-white py-1.5 px-4 rounded-md text-[#FF2684]">
              Subscribe
            </button>
          </span>
        </div>
        <div className="col-span-4 flex justify-end">
          {/* <Image
            alt="Kreative Horizon Retro Logo in White and Color"
            src="/BIG_LOGO.png"
            className="-mb-12"
            height={500}
            width={500}
          /> */}
        </div>
      </div>
    </Container>
  );
}
