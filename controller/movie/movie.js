import { excuteQuery } from "../../config/db";

const getAllMovies = async (req, res) => {
  try {
    let movieData = await excuteQuery(
      "select Mov_Name, Mov_Year, Mov_Time, Mov_Lang, Mov_Country, Mov_Age, Mov_Desc, Mov_Type, Mov_Link, Cast_Name, Mov_Cast_2, Mov_Cast_3, Dir_Name, Mov_Rate from ratingdb.movie join director on Mov_Dir = Dir_Id join cast_t on Mov_Cast_1 = Cast_Id ;",
      []
    );
    res.send(movieData);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getMovieById = async (req, res) => {
  let id = req.query.id;
  try {
    let movieData = await excuteQuery(
      `select Mov_Name, Mov_Year, Mov_Time, Mov_Lang, Mov_Country, Mov_Age, Mov_Desc, Mov_Type, Mov_Link, Cast_Name, Mov_Cast_2, Mov_Cast_3, Dir_Name, Mov_Rate from ratingdb.movie join director on Mov_Dir = Dir_Id join cast_t on Mov_Cast_1 = Cast_Id WHERE Mov_Id =${id}`,
      []
    );
    res.status(200).json(movieData);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteMovieById = async (req, res) => {
  let id = req.query.id;
  try {
    let movieData = await excuteQuery(
      `DELETE FROM ratingdb.movie WHERE Mov_Id =${id}`,
      [id]
    );
    res.status(200).json(movieData);
  } catch (error) {
    res.status(500).json(error);
  }
};

const saveMovie = async (req, res) => {
  let Mov_Name = req.body.Mov_Name;
  let Mov_Year = req.body.Mov_Year;
  let Mov_Time = req.body.Mov_Time;
  let Mov_Lang = req.body.Mov_Lang;
  let Mov_Country = req.body.Mov_Country;
  let Mov_Age = req.body.Mov_Age;
  let Mov_Desc = req.body.Mov_Desc;
  let Mov_Type = req.body.Mov_Type;
  let Mov_Link = req.body.Mov_Link;
  let Mov_Cast_1 = req.body.Mov_Cast_1;
  let Mov_Cast_2 = req.body.Mov_Cast_2;
  let Mov_Cast_3 = req.body.Mov_Cast_3;
  let Mov_Dir = req.body.Mov_Dir;
  let Mov_Rate = req.body.Mov_Rate;
  try {
    let movieData = await excuteQuery(
      "insert into movie (`Mov_Name`, `Mov_Year`, `Mov_Time`, `Mov_Lang`, `Mov_Country`, `Mov_Age`, `Mov_Desc`, `Mov_Type`, `Mov_Link`, `Mov_Cast_1`, `Mov_Cast_2`, `Mov_Cast_3`, `Mov_Dir`, `Mov_Rate`) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        Mov_Name,
        Mov_Year,
        Mov_Time,
        Mov_Lang,
        Mov_Country,
        Mov_Age,
        Mov_Desc,
        Mov_Type,
        Mov_Link,
        Mov_Cast_1,
        Mov_Cast_2,
        Mov_Cast_3,
        Mov_Dir,
        Mov_Rate,
      ]
    );
    movieData = await excuteQuery(
      `SELECT * FROM ratingdb.movie where Mov_Id=${movieData.insertId}`,
      []
    );
    res.status(200).json(movieData);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateMovie = async (req, res) => {
  let id = req.query.id;
  const {
    Mov_Name,
    Mov_Year,
    Mov_Time,
    Mov_Lang,
    Mov_Country,
    Mov_Age,
    Mov_Desc,
    Mov_Type,
    Mov_Link,
    Mov_Cast_1,
    Mov_Cast_2,
    Mov_Cast_3,
    Mov_Dir,
    Mov_Rate,
  } = req.body;
  try {
    let movieData = await excuteQuery(
      `select * from ratingdb.movie where Mov_Id=?`,
      [id]
    );
    if (movieData.length > 0) {
      movieData = await excuteQuery(
        "UPDATE ratingdb.movie SET Mov_Name=?, Mov_Year=?, Mov_Time=?, Mov_Lang=?, Mov_Country=?, Mov_Age=?, Mov_Desc=?, Mov_Type=?, Mov_Link=?, Mov_Cast_1=?, Mov_Cast_2=?, Mov_Cast_3=?, Mov_Dir=?, Mov_Rate=? WHERE Mov_Id=?",
        [
          Mov_Name,
          Mov_Year,
          Mov_Time,
          Mov_Lang,
          Mov_Country,
          Mov_Age,
          Mov_Desc,
          Mov_Type,
          Mov_Link,
          Mov_Cast_1,
          Mov_Cast_2,
          Mov_Cast_3,
          Mov_Dir,
          Mov_Rate,
          id,
        ]
      );
      res.status(200).json(movieData);
    } else {
      res.status(404).json(`Movie to id=${id} not found`);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export { getAllMovies, getMovieById, deleteMovieById, saveMovie, updateMovie };
