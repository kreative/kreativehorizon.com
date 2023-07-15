import Image from "next/image";
import Container from "./Container";

export default function LogoCloud1() {
  const LogoImage = ({ src, alt }: { src: string; alt: string }) => {
    return (
      <Image
        src={src}
        alt={alt}
        width={7000}
        height={100}
        className="mr-4 sm:mr-0 w-1/4 sm:w-1/6 h-auto p-0 md:p-2"
      />
    );
  };

  return (
    <Container>
      <p className="text-2xl tracking-wide font-guthen text-horizon-grey-800 text-center mb-6">
        Trusted by sponsors big and small
      </p>
      <div className="flex flex-wrap space-x-4 sm:space-x-6 space-y-4 md:space-y-0 justify-center items-center">
        <LogoImage
          src="/images/sponsors/1PASSWORD.png"
          alt="1Password Logo in Color"
        />
        <LogoImage
          src="/images/sponsors/WOLFRAM_LANGUAGE.png"
          alt="Wolfram Language Logo in Color"
        />
        <LogoImage
          src="/images/sponsors/AMBIDEXTER.png"
          alt="Ambidexter Logo in Color"
        />
        <LogoImage
          src="/images/sponsors/TECHNEXUS.png"
          alt="Technexus Logo in Color"
        />
        <Image
          src="/images/sponsors/JETBRAINS.png"
          alt="JetBrains Logo in Color"
          className="mr-4 sm:mr-0 w-[8%] sm:w-[6%] md:w-[5%] h-auto"
          width={500}
          height={500}
        />
        <LogoImage
          src="/images/sponsors/LINODE.png"
          alt="Linode Logo in Color"
        />
        <LogoImage
          src="/images/sponsors/PUSHER.png"
          alt="Pusher Logo in Color"
        />
        <LogoImage
          src="/images/sponsors/MORNINGSTAR.png"
          alt="Morningstar Logo in Color"
        />
        <LogoImage
          src="/images/sponsors/BALSAMIQ.png"
          alt="Balsamiq Logo in Color"
        />
        <LogoImage
          src="/images/sponsors/MICROSOFT.png"
          alt="Microsoft Logo in Color"
        />
        <LogoImage
          src="/images/sponsors/IVY_COLLEGE.png"
          alt="Ivy College of Business Start Something Logo in Color"
        />
      </div>
    </Container>
  );
}
