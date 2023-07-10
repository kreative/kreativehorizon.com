import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={"bg-red-500 py-6"}>
        <h1 className="font-chedros text-xl text-center">My Site</h1>
      </div>
      <Footer />
    </div>
  );
}
