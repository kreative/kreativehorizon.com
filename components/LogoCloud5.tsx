import Image from "next/image";
import Container from "./Container";

export default function LogoCloud5() {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 xl:col-span-4">
          <p className="text-center xl:text-left text-2xl text-horizon-grey-600">
            Trusted by the world&apos;s most mission driven companies
          </p>
        </div>
        <div className="col-span-12 xl:col-span-8 flex flex-wrap sm:space-x-6 space-y-3 sm:space-y-0 justify-center xl:justify-end items-baseline sm:items-center">
          <Image
            src="/images/sponsors/PUSHER.png"
            alt="Pusher Logo in Color"
            width={500}
            height={100}
            className="mr-4 sm:mr-0 w-1/4 sm:w-1/6 h-auto"
          />
          <Image
            src="/images/sponsors/MORNINGSTAR.png"
            alt="Morningstar Logo in Color"
            width={500}
            height={100}
            className="mr-4 sm:mr-0 w-1/4 sm:w-1/6 h-auto"
          />
          <Image
            src="/images/sponsors/BALSAMIQ.png"
            alt="Balsamiq Logo in Color"
            width={500}
            height={100}
            className="w-1/4 sm:w-1/6 h-auto"
          />
          <Image
            src="/images/sponsors/MICROSOFT.png"
            alt="Microsoft Logo in Color"
            width={500}
            height={100}
            className="mr-4 sm:mr-0 w-1/4 sm:w-1/6 h-auto"
          />
          <Image
            src="/images/sponsors/IVY_COLLEGE.png"
            alt="Ivy College of Business Start Something Logo in Color"
            width={500}
            height={100}
            className="w-1/4 sm:w-1/6 h-auto"
          />
        </div>
      </div>
    </Container>
  );
}
