import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { Button, TextField } from "@mui/material";

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
        <h1 className="mx-auto text-xl mb-5 topic">Edit User</h1>
        <div className="flex justify-center mx-auto w-full px-20">
          <TextField
            type="text"
            name="User_Name"
            onChange={handleChange}
            value={addUser.User_Name}
            label="Enter Username"
            sx={{
              input: { color: "white" },
              label: { color: "white" },
              fieldset: {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
            className=" md:w-2/4 w-full mx-auto my-1"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <TextField
            type="text"
            name="User_Country"
            onChange={handleChange}
            value={addUser.User_Country}
            label="Enter Country"
            sx={{
              input: { color: "white" },
              label: { color: "white" },
              fieldset: {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
            className=" md:w-2/4 w-full mx-auto my-1"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <TextField
            type="text"
            name="User_Email"
            onChange={handleChange}
            value={addUser.User_Email}
            label="Enter Email"
            sx={{
              input: { color: "white" },
              label: { color: "white" },
              fieldset: {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
            className=" md:w-2/4 w-full mx-auto my-1"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <TextField
            type="text"
            name="User_Link"
            onChange={handleChange}
            value={addUser.User_Link}
            label="Enter User Image Link"
            sx={{
              input: { color: "white" },
              label: { color: "white" },
              fieldset: {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
            className=" md:w-2/4 w-full mx-auto my-1"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <TextField
            type="text"
            name="User_Dob"
            onChange={handleChange}
            value={addUser.User_Dob}
            clabel="Enter Birthday"
            sx={{
              input: { color: "white" },
              label: { color: "white" },
              fieldset: {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
            className=" md:w-2/4 w-full mx-auto my-1"
          />
        </div>
        <div className="mx-auto mt-5">
          <Button
            type="submit"
            size="large"
            className="bg-[#1976D2] mx-2"
            variant="contained"
          >
            Update
          </Button>

          <Button
            type="submit"
            size="large"
            href="/user"
            className="bg-[#27bb31] hover:bg-[#239f2b] mx-2"
            variant="contained"
          >
            Go Back
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
