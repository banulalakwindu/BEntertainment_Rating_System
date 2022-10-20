import React from "react";
import Movietable from "../components/Movietable";

const movie = ({ data }) => {
  return (
    <div>
      <Movietable movieData={data} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/movie/movie");
  const data = await res.json();

  return {
    props: { data },
  };
}

export default movie;
