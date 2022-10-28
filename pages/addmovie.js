import React from "react";
import AddMovie from "../components/AddMovie";
const addmovie = ({ data }) => {
  return (
    <div>
      <AddMovie attrib={data} />
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

export default addmovie;
