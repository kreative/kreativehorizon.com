import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={"min-h-screen bg-red-500 pt-24"}>
        <h1 className="font-chedros text-xl text-center">My Site</h1>
      </div>
      <Footer />
    </div>
  );
}
