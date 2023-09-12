import Script from "next/script";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeagueBadge from "@/components/LeagueBadge";
import { NextSeo } from "next-seo";

export default function RSVPHackISUv2() {
  return (
      <div>
        <NextSeo
            title="RSVP for HackIowaState v2"
            description="We're excited to see you on September 30th, 2023. RSVP to let us know you're coming!"
        />
        <Navbar />
        <main>
          <Container>
            <div className={"pb-12"}>
              <Script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></Script>
              <iframe
                  className="airtable-embed airtable-dynamic-height"
                  src="https://airtable.com/embed/app25xPnhCNTdINnI/shrv8GDbqiyAchauI?backgroundColor=gray"
                  frameBorder="0" width="100%" height="1014" style={{background: "transparent", border: "0px solid #ccc"}}
              ></iframe>
            </div>
          </Container>
        </main>
        <Footer />
        <LeagueBadge />
      </div>
  );
}
