import React from "react";
import Head from "next/head";
import Header from "../components/Header";

const error = () => {
  return (
    <div>
      <Head>
        <title>Entertainment | Error</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col px-20 mt-10 text-white">
        <img
          className="mx-auto"
          src="/error.png"
          alt=""
          height={750}
          width={750}
        />
        <h1 className="oops mx-auto">O o p s...</h1>
        <h1 className="mx-auto -mb-5 text-7xl">Error 404</h1>
        <h1 className="mx-auto text-3xl mt-5">Page Not Found</h1>
      </div>
    </div>
  );
};

export default error;
