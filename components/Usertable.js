import React from "react";
import styles from "../styles/Usertable.module.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const Usertable = ({ userData }) => {
  const router = useRouter();
  const deleteUser = async (id) => {
    let data = await axios.delete(`http://localhost:3000/api/user/${id}`);
    router.push("/admin");
  };
  return (
    <div className="mx-10">
      <h1 className="text-lg">User Table</h1>
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
              <th className={styles.th}>{uData.User_Id}</th>
              <td className={styles.th}>{uData.User_Name}</td>
              <td className={styles.th}>{uData.User_Country}</td>
              <td className={styles.th}>{uData.User_Email}</td>
              <td className={styles.th}>{uData.User_Link}</td>
              <td className={styles.th}>{uData.User_Dob}</td>
              <td className="flex flex-col px-5 py-3">
                <Link href={`/user/${uData.User_Id}`}>
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
  );
};

export default Usertable;
