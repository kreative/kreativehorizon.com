import "@/styles/globals.css";
import Script from "next/script";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { DefaultSeo } from "next-seo";

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
      <DefaultSeo
        title={undefined}
        titleTemplate="%s | Kreative Horizon"
        defaultTitle="Kreative Horizon"
        description="We're on a mission of providing students the tools and resources to build the future of tomorrow, today so we can see the world for what it could be. Hackathons, workshops, and more."
        canonical="https://kreativehorizon.com/"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
            sizes: "180x180",
          },
          {
            rel: "icon",
            href: "/favicon-32x32.png",
            sizes: "32x32",
          },
          {
            rel: "icon",
            href: "/favicon-16x16.png",
            sizes: "16x16",
          },
          {
            rel: "manifest",
            href: "/site.webmanifest",
          },
          {
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
            color: "#ff5156",
          },
        ]}
        additionalMetaTags={[
          {
            name: "ms-application-TileColor",
            content: "#ff5156",
          },
          {
            name: "theme-color",
            content: "#ffffff",
          },
        ]}
        openGraph={{
          url: "https://kreativehorizon.com/",
          title: "Kreative Horizon",
          description:
            "We're on a mission of providing students the tools and resources to build the future of tomorrow, today so we can see the world for what it could be. Hackathons, workshops, and more.",
          images: [
            {
              url: "/images/horizon-retro-logo.png",
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
      <Script id="hotjar-analytics" type="text/javascript">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3645036,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8D33N2GVHQ"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8D33N2GVHQ');
        `}
      </Script>
      <Component {...pageProps} />
      <Script id="trust-pulse">
        {`
          !function(w,d,s,n,r,a){(w._tpq=w._tpq||[]).push(['init',n]),(r=d.createElement(s)).type='text/javascript',r.src='https://a.trstplse.com/app/js/api.min.js',r.async=!0,(a=d.getElementsByTagName(s)[0]).parentNode.insertBefore(r,a)}(window,document,'script',10418);
          `}
      </Script>
    </div>
  );
}
