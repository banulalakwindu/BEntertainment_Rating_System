import React from "react";
import Header from "../components/Header";
import Head from "next/head";
import { useSession, signIn } from "next-auth/react";
import { TextField, Button } from "@mui/material";

const login = () => {
  const { data: session } = useSession();
  return (
    <div className="text-white">
      <Head>
        <title>Entertainment | Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <form className="flex flex-col mt-10  w-full md:w-1/2  mx-auto py-10 rounded-xl ">
        <h1 className="mx-auto text-xl mb-5 topic text-white">Login</h1>
        <div className="flex justify-center mx-auto w-full px-20">
          <TextField
            className="w-full"
            type="email"
            id="filled-basic"
            label="Enter Email"
            variant="filled"
            sx={{
              input: { color: "white" },
              label: { color: "white" },
            }}
          />
          {/* <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className=" w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          /> */}
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <TextField
            className="w-full"
            id="filled-basic"
            label="Enter Password"
            variant="filled"
            sx={{
              input: { color: "white" },
              label: { color: "white" },
            }}
          />
          {/* <input
            type="password"
            name="password"
            placeholder="***************"
            className=" w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          /> */}
        </div>

        <div className="mx-auto mt-10">
          <Button size="large" className="bg-[#1976D2]" variant="contained">
            Submit
          </Button>
        </div>

        <small className="mx-auto text-lg text-white my-5">or login with</small>

        <div className="flex mx-auto">
          <div>
            <img
              src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
              alt=""
              height={50}
              width={50}
              onClick={() => signIn("facebook")}
              className="rounded-full bg-white p-1 m-2"
            />
          </div>
          <div>
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt=""
              height={50}
              width={50}
              onClick={() => signIn("github")}
              className="rounded-full m-2"
            />
          </div>
          <div>
            <img
              src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
              alt=""
              height={50}
              width={50}
              onClick={() => signIn("google")}
              className="rounded-full bg-white p-2 m-2"
            />
          </div>
        </div>

        <small className="mx-auto mt-5 text-lg text-white">
          Still not a member? Click{" "}
          <a className="text-blue-500 underline" href="/adduser">
            Sign Up
          </a>
        </small>
      </form>
    </div>
  );
};

export default login;
