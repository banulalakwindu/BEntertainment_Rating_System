import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { Button, TextField } from "@mui/material";

const EditMovie = ({ updateData }) => {
  const router = useRouter();
  const [addMovie, setMovie] = useState({
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
    Mov_Rate: "",
  });
  useEffect(() => {
    setMovie(updateData[0]);
  }, [updateData]);
  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.put(
      `http://localhost:3000/api/movie/${updateData[0].Mov_Id}`,
      addMovie
    );
    if (data.data) router.push("/movie");
    setMovie({
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
      Mov_Rate: "",
    });
    alert("Movie Updated Successfully");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...addMovie, [e.target.name]: value });
  };
  return (
    <div>
      <Header />
      <form onSubmit={onSubmit} className="flex flex-col mt-10">
        <h1 className="mx-auto text-xl mb-5 topic">Edit Movie</h1>
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
            label="Enter Movie Running Time"
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
            label="Enter Movie Language"
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
            multiline
            label="Enter Movie Storyline"
            sx={{
              input: { color: "white" },
              label: { color: "white" },
              fieldset: {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
              textArea: { color: "white" },
            }}
            className="md:w-2/4 w-full mx-auto my-1"
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
            rows="3"
            label="Enter Movie Poster Link"
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
        <div className="flex justify-center mx-auto w-full px-20">
          <TextField
            type="text"
            name="Mov_Rate"
            onChange={handleChange}
            value={addMovie.Mov_Rate}
            label="Enter Movie Rate"
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

        <div className="mx-auto mt-3 mb-5">
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
            href="/movie"
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

export default EditMovie;
