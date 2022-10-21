import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../components/Header";

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
          <input
            type="text"
            name="Mov_Name"
            placeholder="Enter Movie Name"
            onChange={handleChange}
            value={addMovie.Mov_Name}
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="text"
            name="Mov_Year"
            placeholder="Enter Movie Year"
            onChange={handleChange}
            value={addMovie.Mov_Year}
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="text"
            name="Mov_Time"
            placeholder="Enter Movie Time"
            onChange={handleChange}
            value={addMovie.Mov_Time}
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="text"
            name="Mov_Lang"
            placeholder="Enter Movie Language"
            onChange={handleChange}
            value={addMovie.Mov_Lang}
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="text"
            name="Mov_Country"
            placeholder="Enter Movie Country"
            onChange={handleChange}
            value={addMovie.Mov_Country}
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="text"
            name="Mov_Age"
            placeholder="Enter Movie Age"
            onChange={handleChange}
            value={addMovie.Mov_Age}
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="text"
            name="Mov_Desc"
            placeholder="Enter Movie Description"
            onChange={handleChange}
            value={addMovie.Mov_Desc}
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="text"
            name="Mov_Type"
            placeholder="Enter Movie Type"
            onChange={handleChange}
            value={addMovie.Mov_Type}
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="text"
            name="Mov_Link"
            placeholder="Enter Movie Link"
            onChange={handleChange}
            value={addMovie.Mov_Link}
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="text"
            name="Mov_Cast_1"
            placeholder="Enter Movie Cast 1"
            onChange={handleChange}
            value={addMovie.Mov_Cast_1}
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="text"
            name="Mov_Cast_2"
            placeholder="Enter Movie Cast 2"
            onChange={handleChange}
            value={addMovie.Mov_Cast_2}
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="text"
            name="Mov_Cast_3"
            placeholder="Enter Movie Cast 3"
            onChange={handleChange}
            value={addMovie.Mov_Cast_3}
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="text"
            name="Mov_Dir"
            placeholder="Enter Movie Director"
            onChange={handleChange}
            value={addMovie.Mov_Dir}
            className=" md:w-2/4 w-full mx-auto border-2 border-gray-400 rounded-md p-2 my-2"
          />
        </div>
        <div className="flex justify-center mx-auto w-full px-20">
          <input
            type="text"
            name="Mov_Rate"
            placeholder="Enter Movie Rate"
            onChange={handleChange}
            value={addMovie.Mov_Rate}
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
          <Link href={`/movie`}>
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

export default EditMovie;
