import React from "react";
import Usertable from "../components/Usertable";
import Head from "next/head";

const user = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Entertainment | User Table</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Usertable userData={data} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/user/user");
  const data = await res.json();

  return {
    props: { data },
  };
}

export default user;
