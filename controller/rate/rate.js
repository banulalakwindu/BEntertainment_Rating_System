import { excuteQuery } from "../../config/db";

const getRateById = async (req, res) => {
  let id = req.query.id;
  try {
    let rateData = await excuteQuery(
      `SELECT * from ratingdb.rate_t where Rate_Mov = ${id} and Rate_User = ${req.session.user_id}`,
      []
    );
    res.status(200).json(rateData);
  } catch (error) {
    res.status(500).json(error);
  }
};

// const deleteMovieById = async (req, res) => {
//   let id = req.query.id;
//   try {
//     let movieData = await excuteQuery(
//       `DELETE FROM ratingdb.movie WHERE Mov_Id =${id}`,
//       [id]
//     );
//     res.status(200).json(movieData);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// const saveMovie = async (req, res) => {
//   let Mov_Id = req.body.Mov_Id;
//   let Mov_Name = req.body.Mov_Name;
//   let Mov_Year = req.body.Mov_Year;
//   let Mov_Time = req.body.Mov_Time;
//   let Mov_Lang = req.body.Mov_Lang;
//   let Mov_Country = req.body.Mov_Country;
//   let Mov_Age = req.body.Mov_Age;
//   let Mov_Desc = req.body.Mov_Desc;
//   let Mov_Type = req.body.Mov_Type;
//   let Mov_Link = req.body.Mov_Link;
//   let Mov_Cast_1 = req.body.Mov_Cast_1;
//   let Mov_Cast_2 = req.body.Mov_Cast_2;
//   let Mov_Cast_3 = req.body.Mov_Cast_3;
//   let Mov_Dir = req.body.Mov_Dir;
//   try {
//     let movieData = await excuteQuery(
//       "insert into movie (`Mov_Name`, `Mov_Year`, `Mov_Time`, `Mov_Lang`, `Mov_Country`, `Mov_Age`, `Mov_Desc`, `Mov_Type`, `Mov_Link`) values (?,?,?,?,?,?,?,?,?);",
//       [
//         Mov_Name,
//         Mov_Year,
//         Mov_Time,
//         Mov_Lang,
//         Mov_Country,
//         Mov_Age,
//         Mov_Desc,
//         Mov_Type,
//         Mov_Link,
//       ]
//     );
//     let movieData1 = await excuteQuery(
//       "insert into cast_t (`Cast_Mov`, `Cast_Act`) values (?,?);",
//       [Mov_Id, Mov_Cast_1]
//     );
//     let movieData2 = await excuteQuery(
//       "insert into cast_t (`Cast_Mov`, `Cast_Act`) values (?,?);",
//       [Mov_Id, Mov_Cast_2]
//     );
//     let movieData3 = await excuteQuery(
//       "insert into cast_t (`Cast_Mov`, `Cast_Act`) values (?,?);",
//       [Mov_Id, Mov_Cast_3]
//     );
//     let movieData4 = await excuteQuery(
//       "insert into directing (`Dir_Mov`, `Dir_Dir`) values (?,?);",
//       [Mov_Id, Mov_Dir]
//     );
//     res
//       .status(200)
//       .json(movieData, movieData1, movieData2, movieData3, movieData4);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// const updateMovie = async (req, res) => {
//   let id = req.query.id;
//   const {
//     Mov_Name,
//     Mov_Year,
//     Mov_Time,
//     Mov_Lang,
//     Mov_Country,
//     Mov_Age,
//     Mov_Desc,
//     Mov_Type,
//     Mov_Link,
//     Mov_Cast_1,
//     Mov_Cast_2,
//     Mov_Cast_3,
//     Mov_Dir,
//   } = req.body;
//   try {
//     let movieData = await excuteQuery(
//       `select * from ratingdb.movie where Mov_Id=?`,
//       [id]
//     );
//     if (movieData.length > 0) {
//       movieData = await excuteQuery(
//         "UPDATE ratingdb.movie SET Mov_Name=?, Mov_Year=?, Mov_Time=?, Mov_Lang=?, Mov_Country=?, Mov_Age=?, Mov_Desc=?, Mov_Type=?, Mov_Link=? WHERE Mov_Id=?",
//         [
//           Mov_Name,
//           Mov_Year,
//           Mov_Time,
//           Mov_Lang,
//           Mov_Country,
//           Mov_Age,
//           Mov_Desc,
//           Mov_Type,
//           Mov_Link,
//           id,
//         ]
//       );
//       let movieData1 = await excuteQuery(
//         "delete from cast_t where Cast_Mov=?;",
//         [id]
//       );
//       let movieData2 = await excuteQuery(
//         "delete from directing where Dir_Mov=?;",
//         [id]
//       );
//       let movieData3 = await excuteQuery(
//         "insert into cast_t (`Cast_Mov`, `Cast_Act`) values (?,?);",
//         [id, Mov_Cast_1]
//       );
//       let movieData4 = await excuteQuery(
//         "insert into cast_t (`Cast_Mov`, `Cast_Act`) values (?,?);",
//         [id, Mov_Cast_2]
//       );
//       let movieData5 = await excuteQuery(
//         "insert into cast_t (`Cast_Mov`, `Cast_Act`) values (?,?);",
//         [id, Mov_Cast_3]
//       );
//       let movieData6 = await excuteQuery(
//         "insert into directing (`Dir_Mov`, `Dir_Dir`) values (?,?);",
//         [id, Mov_Dir]
//       );
//       res
//         .status(200)
//         .json(
//           movieData,
//           movieData1,
//           movieData2,
//           movieData3,
//           movieData4,
//           movieData5,
//           movieData6
//         );
//     } else {
//       res.status(404).json(`Movie to id=${id} not found`);
//     }
//   } catch (error) {
//     res.status(400).json(error);
//   }
// };

export { getRateById };
