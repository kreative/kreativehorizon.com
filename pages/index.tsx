import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kreative Horizon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={"min-h-full bg-red-500"}>
          <h1 className={"red-500"}>Welcome to my nextjs site</h1>
        </div>
      </main>
    </div>
  );
}
