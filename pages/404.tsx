import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>404 - Page Not Found | Kreative Horizon</title>
        <meta name="description" content="404 - Page Not Found" />
      </Head>
      <Navbar />
      <main>
        <Container>
          <div className="flex flex-col items-center justify-center space-y-4 min-h-[80vh] py-12">
            <h3 className="text-2xl font-guthen tracking-wider">
              Whoops... Looks like you&apos;re lost!
            </h3>
            <h1 className="text-6xl xs:text-7xl font-chedros text-center">
              We couldn&apos;t find this page
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-x-3 pb-6">
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-2.5 px-5 font-bold bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple text-white"
                  href="/"
                >
                  Go back home
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-2.5 px-5 bg-opacity-0 bg-transparent text-black"
                  href="/support"
                >
                  Contact support <span aria-hidden="true">&rarr;</span>
                </Link>
              </motion.div>
            </div>
            <Image
              src="/404-cat.gif"
              alt="404 Cat GIF"
              width={300}
              height={350}
              className="h-[40vh] w-auto"
            />
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
