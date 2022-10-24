import React from "react";
import styles from "../styles/Usertable.module.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "./Header";

const Usertable = ({ userData }) => {
  const router = useRouter();
  const deleteUser = async (id) => {
    let data = await axios.delete(`http://localhost:3000/api/user/${id}`);
    router.push("/user");
  };
  return (
    <div>
      <Header />
      <div className="mx-10 flex flex-col justify-center my-10">
        <h1 className="text-lg mx-auto mb-5 topic">User Table</h1>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>User Id</th>
              <th className={styles.th}>User Name</th>
              <th className={styles.th}>User Country</th>
              <th className={styles.th}>User Email</th>
              <th className={styles.th}>User Link</th>
              <th className={styles.th}>User DOB</th>
              <th className={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {userData.map((uData, index) => (
              <tr key={index}>
                <th className={styles.th}>{uData.id}</th>
                <td className={styles.th}>{uData.name}</td>
                <td className={styles.th}>{uData.country}</td>
                <td className={styles.th}>{uData.email}</td>
                <td className={styles.th}>{uData.image}</td>
                <td className={styles.th}>{uData.dob}</td>
                <td className="flex flex-col px-5 py-3">
                  <Link href={`/user/${uData.email}`}>
                    <button className="rounded-md bg-green-800 my-2 text-white py-1">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteUser(uData.User_Id)}
                    className="rounded-md bg-red-800 my-2 text-white py-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Usertable;
