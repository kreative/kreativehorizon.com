import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

export default function CompleteApp() {
  return (
    <div>
      <NextSeo title="Complete Your Application" />
      <Navbar />
      <main>
        <Container>
          <div></div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
