import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Head from "next/head";
import { TextField, Button } from "@mui/material";

const AddMovie = ({ attrib }) => {
  const router = useRouter();
  const [addMovie, setMovie] = useState({
    Mov_Id: attrib[0].Mov_Id + 1,
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.post(
      `http://localhost:3000/api/movie/movie`,
      addMovie
    );
    if (data.data) router.push("/addmovie");
    setMovie({
      Mov_Id: attrib[0].Mov_Id + 1,
      Mov_Name: "",
      Mov_Year: "",
      Mov_Time: "",
      Mov_Lang: "",
      Mov_Country: "",
      Mov_Age: "",
      Mov_Desc: "",
      Mov_Type: "",
      Mov_Link: "",
      Mov_Cast_1: "",
      Mov_Cast_2: "",
      Mov_Cast_3: "",
      Mov_Dir: "",
    });
    alert("Movie Added Successfully");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...addMovie, [e.target.name]: value });
  };

  return (
    <div>
      <Head>
        <title>Entertainment | Add Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <form onSubmit={onSubmit} className="flex flex-col mt-10">
        <h1 className="mx-auto text-xl mb-5 topic">Add Movie</h1>
        <div className="flex justify-center mx-auto w-full px-20">
          <TextField
            disabled
            type="text"
            name="Mov_Id"
            onChange={handleChange}
            value={addMovie.Mov_Id}
            label="You Can't change Movie Id"
            title="You Can't change Movie Id"
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
            name="Mov_Name"
            onChange={handleChange}
            value={addMovie.Mov_Name}
            label="Enter Movie Name"
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
            name="Mov_Year"
            onChange={handleChange}
            value={addMovie.Mov_Year}
            label="Enter Movie Year"
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
            name="Mov_Time"
            onChange={handleChange}
            value={addMovie.Mov_Time}
            label="Enter Movie Playing Time"
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
            name="Mov_Lang"
            onChange={handleChange}
            value={addMovie.Mov_Lang}
            label="Enter Movie Speaking Language"
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
            name="Mov_Country"
            onChange={handleChange}
            value={addMovie.Mov_Country}
            label="Enter Movie Country"
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
            name="Mov_Age"
            onChange={handleChange}
            value={addMovie.Mov_Age}
            label="Enter Movie Age Restriction"
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
            name="Mov_Desc"
            onChange={handleChange}
            value={addMovie.Mov_Desc}
            label="Enter Movie Storyline"
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
            name="Mov_Type"
            onChange={handleChange}
            value={addMovie.Mov_Type}
            label="Enter Movie Genre"
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
            name="Mov_Link"
            onChange={handleChange}
            value={addMovie.Mov_Link}
            label="Enter Movie Cover Image Link"
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
            name="Mov_Cast_1"
            onChange={handleChange}
            value={addMovie.Mov_Cast_1}
            label="Enter Movie Cast 1"
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
            name="Mov_Cast_2"
            onChange={handleChange}
            value={addMovie.Mov_Cast_2}
            label="Enter Movie Cast 2"
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
            name="Mov_Cast_3"
            onChange={handleChange}
            value={addMovie.Mov_Cast_3}
            label="Enter Movie Cast 3"
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
            name="Mov_Dir"
            onChange={handleChange}
            value={addMovie.Mov_Dir}
            label="Enter Movie Director"
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
        <div className="mx-auto mt-2 mb-5">
          <Button
            type="submit"
            size="large"
            className="bg-[#1976D2]"
            variant="contained"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
