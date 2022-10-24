import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { Button, TextField } from "@mui/material";

const EditUser = ({ updateData }) => {
  console.log("updateData", updateData);
  const router = useRouter();
  const [addUser, setUser] = useState({
    name: "",
    country: "",
    email: "",
    image: "",
    dob: "",
  });
  useEffect(() => {
    setUser(updateData[0]);
  }, [updateData]);
  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.put(
      `http://localhost:3000/api/user/${updateData[0].email}`,
      addUser
    );
    if (data.data) router.push("/user");
    setUser({
      name: "",
      country: "",
      email: "",
      image: "",
      dob: "",
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
            disabled
            type="text"
            name="email"
            onChange={handleChange}
            value={addUser.email}
            label="You Can't change Email"
            title="You Can't change Email"
            sx={{
              disabled: { color: "white" },

              color: "white",

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
            name="name"
            onChange={handleChange}
            value={addUser.name}
            label="Enter User Name"
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
            name="country"
            onChange={handleChange}
            value={addUser.country}
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
            name="image"
            onChange={handleChange}
            value={addUser.image}
            label="Enter User Image Link"
            multiline
            sx={{
              input: { color: "white" },
              label: { color: "white" },
              fieldset: {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
              textArea: { color: "white" },
            }}
            className=" md:w-2/4 w-full mx-auto my-1"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <TextField
            type="text"
            name="dob"
            onChange={handleChange}
            value={addUser.dob}
            label="Enter Birthday"
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
