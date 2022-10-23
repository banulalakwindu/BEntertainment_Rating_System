import React from "react";
import Header from "../../components/Header";
import Head from "next/head";
import { Rating } from "@mui/material";
import TextField from "@mui/material/TextField";

const movrend = ({ movie }) => {
  return (
    <div>
      <Head>
        <title>Entertainment | {movie[0].Mov_Name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="text-white pb-10">
        <div className="lg:flex mx-20 mb-0">
          <div className="my-10 w-full md:w-1/3 lg:w-1/4">
            <img
              className="w-full h-auto mx-auto rounded-2xl"
              src={movie ? movie[0].Mov_Link : null}
            />
          </div>
          <div className="flex flex-col ml-20 my-10">
            <h1 className="topic underline ">{movie[0].Mov_Name}</h1>
            <p className="text-md my-2 italic">
              <span className="text-xl font-bold text-yellow-300 not-italic">
                Release Year :
              </span>
              &#8195;{movie[0].Mov_Year}
            </p>
            <p className="text-md my-2 italic">
              <span className="text-xl font-bold text-yellow-300 not-italic">
                Running time :
              </span>
              &#8195;{movie[0].Mov_Time}
            </p>
            <p className="text-md my-2 italic">
              <span className="text-xl font-bold text-yellow-300 not-italic">
                Language :
              </span>
              &#8195;{movie[0].Mov_Lang}
            </p>
            <p className="text-md my-2 italic">
              <span className="text-xl font-bold text-yellow-300 not-italic">
                Country :
              </span>
              &#8195;{movie[0].Mov_Country}
            </p>
            <p className="text-md my-2 italic">
              <span className="text-xl font-bold text-yellow-300 not-italic">
                Age Restriction :
              </span>
              &#8195;{movie[0].Mov_Age}
            </p>

            <p className="text-md my-2 italic">
              <span className="text-xl font-bold text-yellow-300 not-italic">
                Genre :
              </span>
              &#8195;{movie[0].Mov_Type}
            </p>
            <p className="text-md my-2 italic">
              <span className="text-xl font-bold text-yellow-300 not-italic">
                Directed by :
              </span>
              &#8195;{movie[0].Mov_Dir}
            </p>
            <p className="text-md my-2 italic">
              <span className="text-xl font-bold text-yellow-300 not-italic">
                Starring :
              </span>
              &#8195;{movie[0].Mov_Cast_1},{movie[0].Mov_Cast_2},
              {movie[0].Mov_Cast_3}
            </p>
            <p className="text-md my-2 italic">
              <span className="text-xl font-bold text-yellow-300 not-italic">
                Rating :
              </span>
              &#8195;
              <Rating
                name="half-rating-read"
                defaultValue={movie[0].Mov_Rate}
                precision={0.5}
                readOnly
                className="under"
              />
            </p>
          </div>
        </div>
        <p className="flex flex-col my-2 text-xl italic mx-20 text-justify pb-10 under">
          <span className="font-bold text-yellow-300 not-italic my-2">
            Storyline :
          </span>
          {movie[0].Mov_Desc}
        </p>
        <div className="flex flex-col text-xl my-20 mx-20 h-screen text-justify ">
          <h1 className="mt-20 topic">User Rating</h1>
          <p className="mt-5 mb-10">
            What you think about{" "}
            <span className="font-bold text-yellow-500">
              {movie[0].Mov_Name}
            </span>{" "}
            Movie
          </p>
          <div className="mb-10">
            <h1>Place Your Rating : </h1>
            <Rating
              name="half-rating"
              defaultValue={movie[0].Mov_Rate}
              precision={0.5}
              size="large"
            />
          </div>
          <div className="flex justify-center mx-auto w-full">
            <TextField
              type="text"
              name="User_Comment"
              label="Enter Your Idea about this Movie"
              multiline
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                fieldset: {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
                textArea: { color: "white" },
              }}
              className="w-full mx-auto my-1 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/movie/${params.id}`);
  const movie = await res.json();
  return {
    props: { movie },
  };
}

export default movrend;
