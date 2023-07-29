import Container from "./Container";
import { CldImage } from "next-cloudinary";

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
          <CldImage
            src="kreativehorizon.com/sponsors/PUSHER_bvjime"
            alt="Pusher Logo in Color"
            width="625"
            height="190"
            className="mr-4 sm:mr-0 w-1/4 sm:w-1/6 h-auto"
          />
          <CldImage
            src="kreativehorizon.com/sponsors/MORNINGSTAR_mrz9n3"
            alt="Morningstar Logo in Color"
            width="611"
            height="176"
            className="mr-4 sm:mr-0 w-1/4 sm:w-1/6 h-auto"
          />
          <CldImage
            src="kreativehorizon.com/sponsors/BALSAMIQ_fhtvid"
            alt="Balsamiq Logo in Color"
            width="507"
            height="134"
            className="w-1/4 sm:w-1/6 h-auto"
          />
          <CldImage
            src="kreativehorizon.com/sponsors/MICROSOFT_snwyb4"
            alt="Microsoft Logo in Color"
            width="785"
            height="170"
            className="mr-4 sm:mr-0 w-1/4 sm:w-1/6 h-auto"
          />
          <CldImage
            src="kreativehorizon.com/sponsors/IVY_COLLEGE_jurgig"
            alt="Ivy College of Business Start Something Logo in Color"
            width="186"
            height="47"
            className="w-1/4 sm:w-1/6 h-auto"
          />
        </div>
      </div>
    </Container>
  );
}
