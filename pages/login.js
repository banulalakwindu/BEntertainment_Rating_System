import React from "react";
import Header from "../components/Header";

const login = () => {
  return (
    <div className="text-white">
      <Header />
      <form className="flex flex-col mt-10  w-full md:w-1/3  mx-auto py-10 rounded-xl ">
        <h1 className="mx-auto text-xl mb-5 topic text-white">Login</h1>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="email"
            name="User_Email"
            placeholder="Enter Email"
            className="  w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
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
