import Head from "next/head";
import Header from "../components/Header";
import MovieList from "../components/MovieList";

export default function Home({ movData }) {
  return (
    <div className="bg-gray-900">
      <Head>
        <title>Entertainment | Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div>
          <MovieList movData={movData} />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/movie/movie");
  const movData = await res.json();

  return {
    props: { movData },
  };
}
