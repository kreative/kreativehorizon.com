import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { NextSeo } from "next-seo";

// custom craftwork sans font loading locally
const craftworkSans = localFont({
  src: [
    {
      path: "../public/fonts/CraftworkSans/Regular/CraftworkSans-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CraftworkSans/Regular/CraftworkSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CraftworkSans/Regular/CraftworkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CraftworkSans/Bold/CraftworkSans-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/CraftworkSans/Bold/CraftworkSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/CraftworkSans/Bold/CraftworkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-craftworksans",
});

const guthenBloots = localFont({
  src: [
    {
      path: "../public/fonts/GuthenBloots/Guthen Bloots Personal Use.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GuthenBloots/Guthen Bloots Personal Use.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GuthenBloots/Guthen Bloots Personal Use.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-guthenbloots",
});

const chedros = localFont({
  src: [
    {
      path: "../public/fonts/Chedros/CHEDROS Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Chedros/CHEDROS Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Chedros/CHEDROS Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-chedros",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${craftworkSans.variable} ${guthenBloots.variable} ${chedros.variable}`}
    >
      <NextSeo
        title="Kreative Horizon"
        titleTemplate="Kreative Horizon"
        defaultTitle="Kreative Horizon"
        description="We're on a mission of providing students the tools and resources to build the future of tomorrow, today so we can see the world for what it could be. Hackathons, workshops, and more."
        canonical="https://kreativehorizon.com/"
        openGraph={{
          url: "https://kreativehorizon.com/",
          title: "Kreative Horizon",
          description:
            "We're on a mission of providing students the tools and resources to build the future of tomorrow, today so we can see the world for what it could be. Hackathons, workshops, and more.",
          images: [
            {
              url: "/horizon-retro-logo.png",
              width: 700,
              height: 700,
              alt: "Kreative Horizon Retro Logo",
            },
          ],
        }}
        twitter={{
          handle: "@kreativehorizon",
          site: "@kreativehorizon",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </div>
  );
}
