import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={"min-h-screen bg-red-500 pt-24"}>
        <h1 className="text-xl text-center">My Site</h1>
      </div>
    </div>
  );
}
