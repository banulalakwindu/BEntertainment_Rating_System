import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";

function AddUser() {
  const router = useRouter();
  const [addUser, setUser] = useState({
    User_Name: "",
    User_Country: "",
    User_Email: "",
    User_Link: "",
    User_Dob: "",
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.post(`http://localhost:3000/api/user/user`, addUser);
    if (data.data) router.push("/adduser");
    setUser({
      User_Name: "",
      User_Country: "",
      User_Email: "",
      User_Link: "",
      User_Dob: "",
    });
    alert("User Added Successfully");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...addUser, [e.target.name]: value });
  };

  return (
    <div>
      <Header />
      <form onSubmit={onSubmit} className="flex flex-col mt-5 text-white">
        <h1 className="mx-auto text-xl mb-4 topic">Add User</h1>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="text"
            name="User_Name"
            placeholder="Enter Username"
            onChange={handleChange}
            value={addUser.User_Name}
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="text"
            name="User_Country"
            placeholder="Enter Country"
            onChange={handleChange}
            value={addUser.User_Country}
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="email"
            name="User_Email"
            placeholder="Enter Email"
            onChange={handleChange}
            value={addUser.User_Email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Please enter valid email"
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="text"
            name="User_Link"
            placeholder="Enter Link"
            onChange={handleChange}
            value={addUser.User_Link}
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="text"
            name="User_Dob"
            placeholder="Enter Birthday"
            onChange={handleChange}
            value={addUser.User_Dob}
            pattern="^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$"
            title="Enter a date in this format YYYY-MM-DD"
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <small className="mx-auto text-lg text-white my-5">or login with</small>

        <div className="flex mx-auto">
          <a href="/">
            <img
              src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
              alt=""
              height={50}
              width={50}
              className="rounded-full bg-white p-1 m-2"
            />
          </a>
          <a href="/">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt=""
              height={50}
              width={50}
              className="rounded-full m-2"
            />
          </a>
          <a href="/">
            <img
              src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
              alt=""
              height={50}
              width={50}
              className="rounded-full bg-white p-2 m-2"
            />
          </a>
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <input type="checkbox" />
          <label className="mx-2 my-2">
            I agree to the terms and conditions
          </label>
        </div>

        <div className="mx-auto">
          <button
            className="rounded-md bg-green-800 text-white py-3 px-10 my-3"
            type="submit"
          >
            Submit
          </button>
        </div>
        <small className="mx-auto text-lg text-white">
          Already a member? Click{" "}
          <a className="text-blue-500 underline" href="/login">
            Login
          </a>
        </small>
      </form>
    </div>
  );
}

export default AddUser;
