import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../components/Header";

const EditUser = ({ updateData }) => {
  console.log("updateData", updateData);
  const router = useRouter();
  const [addUser, setUser] = useState({
    User_Name: "",
    User_Country: "",
    User_Email: "",
    User_Link: "",
    User_Dob: "",
  });
  useEffect(() => {
    setUser(updateData[0]);
  }, [updateData]);
  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.put(
      `http://localhost:3000/api/user/${updateData[0].User_Id}`,
      addUser
    );
    if (data.data) router.push("/user");
    setUser({
      User_Name: "",
      User_Country: "",
      User_Email: "",
      User_Link: "",
      User_Dob: "",
    });
    alert("User Updated Successfully");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...addUser, [e.target.name]: value });
  };
  return (
    <div>
      <Header />
      <form onSubmit={onSubmit} className="flex flex-col mt-10">
        <h1 className="mx-auto text-xl mb-5">Edit User</h1>
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
            type="text"
            name="User_Email"
            placeholder="Enter Email"
            onChange={handleChange}
            value={addUser.User_Email}
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
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <div className="mx-auto">
          <button
            className="rounded-md bg-green-800 text-white py-3 px-10 my-5 mx-2"
            type="submit"
          >
            Update
          </button>
          <Link href={`/user`}>
            <button
              className="rounded-md bg-yellow-500 text-white py-3 px-10 my-5 mx-2"
              type="submit"
            >
              Go Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
