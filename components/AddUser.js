import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { TextField, Checkbox, Button } from "@mui/material/";
import { blue } from "@mui/material/colors";
import { useSession, signIn } from "next-auth/react";

function AddUser() {
  const session = useSession();
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
          <TextField
            type="text"
            name="User_Name"
            onChange={handleChange}
            value={addUser.User_Name}
            label="Enter Name"
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
            type="email"
            name="User_Email"
            onChange={handleChange}
            value={addUser.User_Email}
            title="Please enter valid email"
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
            label="Enter Profile Picture Link"
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
            pattern="^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$"
            label="Enter Birthday (YYYY-MM-DD)"
            sx={{
              input: { color: "white" },
              label: { color: "white" },
              fieldset: {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
            title="Enter a date in this format YYYY-MM-DD"
            className=" md:w-2/4 w-full mx-auto my-1"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <Checkbox
            sx={{
              color: blue[800],
              "&.Mui-checked": {
                color: blue[600],
              },
            }}
            className="border-white"
          />
          <label className="mx-1 my-2">
            I agree to the terms and conditions
          </label>
        </div>
        <div className="mx-auto mt-2">
          <Button
            type="submit"
            size="large"
            className="bg-[#1976D2]"
            variant="contained"
          >
            Submit
          </Button>
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
              onClick={
                !session ? () => signIn() : () => router.push("/account")
              }
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
