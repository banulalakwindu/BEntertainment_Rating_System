import React from "react";
import Usertable from "../components/Usertable";

const user = ({ data }) => {
  return (
    <div>
      <Usertable userData={data} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/user/user");
  const data = await res.json();

  return {
    props: { data },
  };
}

export default user;
