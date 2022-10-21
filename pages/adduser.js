import React from "react";
import AddUser from "../components/AddUser";
import Head from "next/head";
const adduser = () => {
  return (
    <div>
      <Head>
        <title>Entertainment | Add User</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AddUser />
    </div>
  );
};

export default adduser;
