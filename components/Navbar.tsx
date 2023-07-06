import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className={"z-10 sticky top-0 pt-1"}>
      <div className="max-w-6xl mx-auto px-6 md:px-0">
        <div className="hidden md:flex justify-center items-center">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm drop-shadow-sm py-1.5 px-2 my-3 rounded-[10px] flex items-center justify-center space-x-6">
            <Link href="/">
              <Image
                className="h-10 w-auto"
                src="/horizon-retro-logo.png"
                alt="Kreative Horizon Retro Iconologo"
                width={50}
                height={50}
              />
            </Link>
            <NavMenu />
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
          </div>
        </div>

        <div className="md:hidden flex justify-between items-center py-3">
          <div>
            <Image
              className="h-6 w-auto"
              src="/kreativehorizon@4x.png"
              alt="Kreative Horizon Logo in Black"
              width={200}
              height={50}
            />
          </div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}
