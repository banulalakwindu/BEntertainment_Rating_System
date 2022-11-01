import React from "react";
import { getSession, useSession, signOut } from "next-auth/react";
import Header from "../components/Header";
import { Button } from "@mui/material";

const account = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <Header />
      <div className="mt-10 mx-auto text-center">
        <h1 className="topic">Profile</h1>
        <img
          src={
            session
              ? session.user.image
              : "https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"
          }
          className="mx-auto bg-white p-1 rounded-full h-40 w-40"
        />
        <div className="flex flex-col mx-10 border-2 border-gray-700 rounded-lg px-10 py-5 mt-10">
          <div className="flex text-white my-3 ">
            <h1 className="font-bold text-xl">Name : </h1>
            <h1 className="text-yellow-500">
              {" "}
              &#8195;{session ? session.user.name : "name"}
            </h1>
          </div>
          <div className="flex text-white my-3">
            <h1 className="font-bold text-xl">Email : </h1>
            <h1 className="text-yellow-500">
              {" "}
              &#8195;{session ? session.user.email : "email"}
            </h1>
          </div>
          <div className="flex text-white my-3">
            <h1 className="font-bold text-xl">Country : </h1>
            <h1 className="text-yellow-500"> &#8195;</h1>
          </div>
          <div className="flex text-white my-3">
            <h1 className="font-bold text-xl">User Image Link : </h1>
            <h1 className="text-yellow-500">
              &#8195;
              {session
                ? session.user.image
                : "https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"}
            </h1>
          </div>
          <div className="flex text-white my-3">
            <h1 className="font-bold text-xl">User Birthday : </h1>
            <h1 className="text-yellow-500"> &#8195;2000-01-05</h1>
          </div>
          <Button
            className="mt-4 py-3"
            href={session ? `/user/${session.user.email}` : "/login"}
            variant="contained"
          >
            Update Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const res = await fetch("http://localhost:3000/api/user/user");
  const data = await res.json();
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  return {
    props: { session, data },
  };
};

export default account;
