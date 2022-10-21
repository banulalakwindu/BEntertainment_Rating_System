import React from "react";
import Header from "../components/Header";
import Head from "next/head";
import { useFormik } from "formik";
import { useState } from "react";
import registerValidate from "../lib/validate";

const login = () => {
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit,
  });

  async function onSubmit(values) {}

  return (
    <div className="text-white">
      <Head>
        <title>Entertainment | Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col mt-10  w-full md:w-1/2  mx-auto py-10 rounded-xl "
      >
        <h1 className="mx-auto text-xl mb-5 topic text-white">Login</h1>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            {...formik.getFieldProps("email")}
            className=" w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>

        <div className="mx-auto">
          <button
            className="rounded-md bg-green-800 text-white py-3 px-10 my-5"
            type="submit"
          >
            Submit
          </button>
        </div>
        <small className="mx-auto text-lg text-white">
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
