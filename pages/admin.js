import Header from "../components/Header";
import Head from "next/head";
import { Button } from "@mui/material";
import { HiUserPlus, HiUserGroup, HiFilm, HiFolder } from "react-icons/hi2";

const admin = () => {
  return (
    <div>
      <Head>
        <title>Entertainment | Admin Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="flex flex-col px-20 mt-20">
        <h1 className="topic mx-auto">Admin Dashboard</h1>
        <div className="flex justify-center w-full py-5 ">
          <Button
            href="/adduser"
            variant="contained"
            className="flex w-full mx-5 my-4 text-xl py-4"
          >
            <h1>Add User</h1>
            <HiUserPlus className="ml-3" />
          </Button>
          <Button
            href="/user"
            variant="contained"
            className="flex w-full mx-5 my-4 text-xl py-4"
          >
            <h1>User List</h1>
            <HiUserGroup className="ml-3" />
          </Button>
        </div>

        <div className="flex justify-center w-full py-5 ">
          <Button
            href="/addmovie"
            variant="contained"
            className="w-full mx-5 my-4 text-xl py-4"
          >
            <h1>Add Movie</h1>
            <HiFilm className="ml-3" />
          </Button>
          <Button
            href="/movie"
            variant="contained"
            className="w-full mx-5 my-4 text-xl py-4"
          >
            <h1>Movie List</h1>
            <HiFolder className="ml-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default admin;
