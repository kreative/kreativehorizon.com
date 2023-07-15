import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LogoCloud1 from "./LogoCloud1";
import Container from "./Container";
import { formatDate } from "@/lib/formatDate";

function ArrowLeftIcon(props: any) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PressReleaseLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}: {
  children: React.ReactNode;
  meta: any;
  isRssFeed?: boolean;
  previousPathname?: string;
}) {
  let router = useRouter();

  if (isRssFeed) {
    return children;
  }

  return (
    <div>
      <NextSeo
        title={`${meta.title} | Press Releases`}
        description={meta.description}
      />
      <Navbar />
      <main>
        <Container>
          <div className="my-16 md:my-24">
            <div className="mx-auto max-w-2xl">
              <article>
                <header className="flex flex-col">
                  <h1 className="mt-6 text-4xl text-horizon-grey-800 dark:text-zinc-100 sm:text-6xl font-chedros">
                    {meta.title}
                  </h1>
                  <time
                    dateTime={meta.date}
                    className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                  >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                    <span className="ml-3">{formatDate(meta.date)}</span>
                  </time>
                </header>
                <div className="mt-8 prose-lg">{children}</div>
              </article>
            </div>
          </div>
        </Container>
        <div className="mb-24">
          <LogoCloud1 />
        </div>
      </main>
      <Footer />
    </div>
  );
}
