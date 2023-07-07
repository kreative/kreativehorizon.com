import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

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
      <Component {...pageProps} />
    </div>
  );
}
