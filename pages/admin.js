import Header from "../components/Header";
import Head from "next/head";

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
          <a
            href="/adduser"
            className="w-full mx-5 px-20 py-5 my-4 bg-sky-900 text-white text-xl rounded-lg text-center hover:bg-sky-700 duration-700"
          >
            Add User
          </a>
          <a
            href="/user"
            className="w-full mx-5 px-20 py-5 my-4 bg-sky-900 text-white text-xl rounded-lg text-center hover:bg-sky-700 duration-700"
          >
            User List
          </a>
        </div>

        <div className="flex justify-center w-full py-5 ">
          <a
            href="/addmovie"
            className="w-full mx-5 px-20 py-5 my-4 bg-sky-900 text-white text-xl rounded-lg text-center hover:bg-sky-700 duration-700"
          >
            Add Movie
          </a>
          <a
            href="/movie"
            className="w-full mx-5 px-20 py-5 my-4 bg-sky-900 text-white text-xl rounded-lg text-center hover:bg-sky-700 duration-700"
          >
            Movie List
          </a>
        </div>
      </div>
    </div>
  );
};

export default admin;
