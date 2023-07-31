import Container from "./Container";
import { CldImage } from "next-cloudinary";

export default function LogoCloud1() {
  const LogoImage = ({ src, alt, w, h }: { src: string; alt: string, w: string, h: string }) => {
    return (
      <CldImage
        src={src}
        alt={alt}
        width={parseInt(w)}
        height={parseInt(h)}
        className="mr-0 w-1/4 sm:w-1/6 h-auto p-0 md:p-2"
      />
    );
  };

  return (
    <Container>
      <p className="text-2xl tracking-wide font-guthen text-horizon-grey-600 text-center mb-6">
        Trusted by sponsors big and small
      </p>
      <div className="flex flex-wrap space-x-4 sm:space-x-6 space-y-4 md:space-y-0 justify-center items-center">
        <CldImage
          src="kreativehorizon.com/sponsors/1PASSWORD_kqtllc"
          alt="1Password Logo in Color"
          width="304"
          height="64"
          className="-mb-4 sm:mr-0 w-1/4 sm:w-1/6 h-auto p-0 md:p-2"
        />
        <LogoImage
          src="kreativehorizon.com/sponsors/WOLFRAM_LANGUAGE_ehmj6t"
          alt="Wolfram Language Logo in Color"
          w="244"
          h="99"
        />
        <LogoImage
          src="kreativehorizon.com/sponsors/Color-ISURP-Logo_2022-1_xg70hq"
          alt="Iowa State University Research Park Logo in Color"
          w="818"
          h="199"
        />
        <LogoImage
          src="kreativehorizon.com/sponsors/TECHNEXUS_gwqk9q"
          alt="Technexus Logo in Color"
          w="259"
          h="72"
        />
        <CldImage
          src="kreativehorizon.com/sponsors/JETBRAINS_ljme47"
          alt="JetBrains Logo in Color"
          className="mr-4 sm:mr-0 w-[8%] sm:w-[6%] md:w-[5%] h-auto"
          width="96"
          height="96"
        />
        <LogoImage
          src="kreativehorizon.com/sponsors/LINODE_calb1c"
          alt="Linode Logo in Color"
          w="329"
          h="85"
        />
        <LogoImage
          src="kreativehorizon.com/sponsors/PUSHER_bvjime"
          alt="Pusher Logo in Color"
          w="625"
          h="190"
        />
        <LogoImage
          src="kreativehorizon.com/sponsors/MORNINGSTAR_mrz9n3"
          alt="Morningstar Logo in Color"
          w="611"
          h="176"
        />
        <LogoImage
          src="kreativehorizon.com/sponsors/BALSAMIQ_fhtvid"
          alt="Balsamiq Logo in Color"
          w="507"
          h="134"
        />
        <LogoImage
          src="kreativehorizon.com/sponsors/MICROSOFT_snwyb4"
          alt="Microsoft Logo in Color"
          w="785"
          h="170"
        />
        <LogoImage
          src="kreativehorizon.com/sponsors/IVY_COLLEGE_jurgig"
          alt="Ivy College of Business Start Something Logo in Color"
          w="186"
          h="47"
        />
        <LogoImage
          src="kreativehorizon.com/sponsors/Visionary-4PMS-2.75IN_fgsaxz"
          alt="Visionary Media Logo in Color"
          w="818"
          h="199"
        />
        <LogoImage
          src="kreativehorizon.com/sponsors/AMBIDEXTER_ocblfh"
          alt="Ambidexter Logo in Color"
          w="316"
          h="55"
        />
      </div>
    </Container>
  );
}
