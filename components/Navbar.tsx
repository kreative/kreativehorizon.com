import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import NavMenu from "./NavMenu";
import PopupMenu from "./PopupMenu";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className={"z-100 sticky top-0 pt-1"}>
      <Container>
        <div className="flex justify-center items-center">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm border border-horizon-grey-200 drop-shadow-md py-1.5 px-2 my-3 rounded-[10px] flex items-center justify-between md:justify-center space-x-6 w-full md:w-auto">
            <Link href="/">
              <Image
                className="h-10 w-auto drop-shadow-lg"
                src="/images/horizon-retro-logo.png"
                alt="Kreative Horizon Retro Iconologo"
                width={50}
                height={50}
              />
            </Link>
            <div className="hidden md:block">
              <NavMenu />
            </div>

            <div className="flex items-center space-x-3 justify-end">
              <motion.div
                whileHover={{
                  scale: 0.95,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href="/get-involved"
                  className="py-2 px-5 bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple text-white rounded-md drop-shadow-md"
                >
                  Get involved
                </Link>
              </motion.div>
              <div className="block md:hidden pr-2">
                <PopupMenu />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
