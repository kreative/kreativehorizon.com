import Image from "next/image";
import Container from "./Container";

export default function LogoCloud6() {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 xl:col-span-4">
          <p className="text-center xl:text-left text-2xl text-horizon-grey-600">
            Trusted by innovative students at these schools
          </p>
        </div>
        <div className="col-span-12 xl:col-span-8 flex flex-wrap sm:space-x-6 space-y-3 sm:space-y-0 justify-center xl:justify-end items-baseline sm:items-center">
          <Image
            src="/images/universities/uillinois.png"
            alt="University of Illinois Logo in Color"
            width={400}
            height={100}
            className="w-1/4 sm:w-1/5 h-auto"
          />
          <Image
            src="/images/universities/uic.png"
            alt="University of Illinois at Chicago Logo in Color"
            width={400}
            height={100}
            className="mr-4 sm:mr-0 w-1/4 sm:w-1/5 h-auto"
          />
          <Image
            src="/images/universities/iowastate.png"
            alt="Iowa State University Logo in Color"
            width={400}
            height={100}
            className="mr-4 sm:mr-0 w-1/5 sm:w-1/6 h-auto"
          />
          <Image
            src="/images/universities/northwestern.png"
            alt="Northwestern University Logo in Color"
            width={400}
            height={100}
            className="w-1/4 sm:w-1/5 h-auto"
          />
        </div>
      </div>
    </Container>
  );
}
