import React from "react";
import styles from "../styles/Usertable.module.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "./Header";

const Movietable = ({ movieData }) => {
  const router = useRouter();
  const deleteMovie = async (id) => {
    let data = await axios.delete(`http://localhost:3000/api/movie/${id}`);
    router.push("/movie");
  };
  return (
    <div>
      <Header />
      <div className="mx-10 flex flex-col justify-center my-10">
        <h1 className="text-lg mx-auto mb-5">Movie Table</h1>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>Movie Id</th>
              <th className={styles.th}>Movie Name</th>
              <th className={styles.th}>Movie Year</th>
              <th className={styles.th}>Movie Time</th>
              <th className={styles.th}>Movie Language</th>
              <th className={styles.th}>Movie Country</th>
              <th className={styles.th}>Movie Age</th>
              <th className={styles.th}>Movie Description</th>
              <th className={styles.th}>Movie Type</th>
              <th className={styles.th}>Movie Link</th>
              <th className={styles.th}>Movie Cast 1</th>
              <th className={styles.th}>Movie Cast 2</th>
              <th className={styles.th}>Movie Cast 3</th>
              <th className={styles.th}>Movie Director</th>
              <th className={styles.th}>Movie Rate</th>
              <th className={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {movieData.map((mData, index) => (
              <tr key={index}>
                <th className={styles.th}>{mData.Mov_Id}</th>
                <th className={styles.th}>{mData.Mov_Name}</th>
                <th className={styles.th}>{mData.Mov_Year}</th>
                <th className={styles.th}>{mData.Mov_Time}</th>
                <th className={styles.th}>{mData.Mov_Lang}</th>
                <th className={styles.th}>{mData.Mov_Country}</th>
                <th className={styles.th}>{mData.Mov_Age}</th>
                <th className={styles.th}>{mData.Mov_Desc}</th>
                <th className={styles.th}>{mData.Mov_Type}</th>
                <th className={styles.th}>{mData.Mov_Link}</th>
                <th className={styles.th}>{mData.Mov_Cast_1}</th>
                <th className={styles.th}>{mData.Mov_Cast_2}</th>
                <th className={styles.th}>{mData.Mov_Cast_3}</th>
                <th className={styles.th}>{mData.Mov_Dir}</th>
                <th className={styles.th}>{mData.Mov_Rate}</th>
                <td className="flex flex-col px-5 py-3">
                  <Link href={`/movie/${mData.Mov_Id}`}>
                    <button className="rounded-md bg-green-800 my-2 text-white py-1">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteMovie(mData.Mov_Id)}
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

export default Movietable;
