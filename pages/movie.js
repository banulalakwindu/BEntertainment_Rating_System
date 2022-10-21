import React from "react";
import Movietable from "../components/Movietable";
import Head from "next/head";

const movie = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Entertainment | Movie Table</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Movietable movieData={data} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/movie/movie");
  const data = await res.json();

  return {
    props: { data },
  };
}

export default movie;
