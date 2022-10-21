import Head from "next/head";
import Header from "../components/Header";
import TVList from "../components/TVList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Entertainment | TV-Shows</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div>
          <TVList />
        </div>
      </main>
    </div>
  );
}
