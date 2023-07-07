import HelloBar from "../components/HelloBar";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <HelloBar
        headline="HackISU v2 is on it&apos;s way... click here to register now ->"
        link="/events/hackisu-v2"
      />
      <Navbar />
      <div className={"min-h-screen bg-red-500 pt-24"}>
        <h1 className="font-chedros text-xl text-center">My Site</h1>
      </div>
    </div>
  );
}
