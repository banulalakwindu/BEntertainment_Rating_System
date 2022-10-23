import React from "react";
import { getSession, useSession, signOut } from "next-auth/react";
import Header from "../components/Header";

const account = () => {
  const { data: session } = useSession();
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
        <div className="bg-gray-500 flex flex-col">
          <div className="flex text-white justify-between">
            <h1>Name : </h1>
            <h1>{session ? session.user.name : "name"}</h1>
          </div>
          <div className="flex text-white">
            <h1>Email : </h1>
            <h1>{session ? session.user.email : "email"}</h1>
          </div>
          <div className="flex text-white">
            <h1>Country : </h1>
            <h1>-</h1>
          </div>
          <div className="flex text-white">
            <h1>User Image Link : </h1>
            <h1>
              {session
                ? session.user.image
                : "https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"}
            </h1>
          </div>
          <div className="flex text-white">
            <h1>User Birthday : </h1>
            <h1>2000-01-05</h1>
          </div>
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
