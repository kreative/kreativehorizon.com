import Container from './Container';
import Link from 'next/link';

export default function Footer() {
  return (
    <div id="top_cta" className="pt-32 pb-72 bg-clouds-horizon bg-cover">
      <Container>
        <div className="flex justify-center">
          <div className="flex flex-col items-center max-w-[34rem] space-y-3">
            <h3 className="text-2xl font-guthen text-white tracking-wider">
              <span className="mr-1.5">Get</span>{" "}Involved
            </h3>
            <h2 className="text-5xl font-chedros text-white text-center">
              OUR MOVEMENT IS ONLY GROWING, WE WANT YOU TO BE A PART OF IT.
            </h2>
            <p className="text-center text-white text-base pb-2">
              We’re starting in Iowa with our sights set on the nation. Every
              student deserves the opportunity to see the future for what it
              could be - and then build it.
            </p>
            <div className="flex items-center justify-center space-x-3">
              <Link
                className="rounded-md py-2 px-5 font-bold bg-white text-black border border-white"
                href="/get-involved"
              >
                Get involved
              </Link>
              <Link
                className="rounded-md py-2 px-5 bg-opacity-0 bg-white text-white border border-white"
                href="/sponsor"
              >
                Sponsor now
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}