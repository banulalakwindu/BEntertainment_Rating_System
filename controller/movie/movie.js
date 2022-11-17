import { excuteQuery } from "../../config/db";

const getAllMovies = async (req, res) => {
  try {
    let movieData = await excuteQuery(
      "SELECT *, GROUP_CONCAT(Act_Name order by Mov_Id separator', ') as Act_List, (select avg(Rate_Size) from ratingdb.rate_t where Rate_Mov = Mov_Id) as Mov_Rate FROM ratingdb.movie left join directing on movie.Mov_Id=directing.Dir_Mov left join director on directing.Dir_Dir=director.Dir_Id left join cast_t on movie.Mov_Id = cast_t.Cast_Mov left join actor on cast_t.Cast_Act=actor.Act_Id where tf=1 group by movie.Mov_Id order by Mov_Id desc;",
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
      `SELECT *, GROUP_CONCAT(Act_Name order by Mov_Id separator', ') as Act_List, (select avg(Rate_Size) from ratingdb.rate_t where Rate_Mov = ${id}) as Mov_Rate FROM ratingdb.movie left join directing on movie.Mov_Id=directing.Dir_Mov left join director on directing.Dir_Dir=director.Dir_Id left join cast_t on movie.Mov_Id = cast_t.Cast_Mov left join actor on cast_t.Cast_Act=actor.Act_Id WHERE Mov_Id =${id} and tf=1 group by movie.Mov_Id`,
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
      `UPDATE movie SET tf = 0 WHERE Mov_Id = ${id}`,
      [id]
    );
    res.status(200).json(movieData);
  } catch (error) {
    res.status(500).json(error);
  }
};

const saveMovie = async (req, res) => {
  let Mov_Id = req.body.Mov_Id;
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
  try {
    let movieData = await excuteQuery(
      "insert into movie (`Mov_Name`, `Mov_Year`, `Mov_Time`, `Mov_Lang`, `Mov_Country`, `Mov_Age`, `Mov_Desc`, `Mov_Type`, `Mov_Link`) values (?,?,?,?,?,?,?,?,?);",
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
      ]
    );
    let movieData1 = await excuteQuery(
      "insert into cast_t (`Cast_Mov`, `Cast_Act`) values (?,?);",
      [Mov_Id, Mov_Cast_1]
    );
    let movieData2 = await excuteQuery(
      "insert into cast_t (`Cast_Mov`, `Cast_Act`) values (?,?);",
      [Mov_Id, Mov_Cast_2]
    );
    let movieData3 = await excuteQuery(
      "insert into cast_t (`Cast_Mov`, `Cast_Act`) values (?,?);",
      [Mov_Id, Mov_Cast_3]
    );
    let movieData4 = await excuteQuery(
      "insert into directing (`Dir_Mov`, `Dir_Dir`) values (?,?);",
      [Mov_Id, Mov_Dir]
    );
    res
      .status(200)
      .json(movieData, movieData1, movieData2, movieData3, movieData4);
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
  } = req.body;
  try {
    let movieData = await excuteQuery(
      `select * from ratingdb.movie where Mov_Id=?`,
      [id]
    );
    if (movieData.length > 0) {
      let movieData = await excuteQuery(
        "call updateMovie(?,?,?,?,?,?,?,?,?,?)",
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
          id,
        ]
      );
      // movieData = await excuteQuery(
      //   "UPDATE ratingdb.movie SET Mov_Name=?, Mov_Year=?, Mov_Time=?, Mov_Lang=?, Mov_Country=?, Mov_Age=?, Mov_Desc=?, Mov_Type=?, Mov_Link=? WHERE Mov_Id=?",
      //   [
      //     Mov_Name,
      //     Mov_Year,
      //     Mov_Time,
      //     Mov_Lang,
      //     Mov_Country,
      //     Mov_Age,
      //     Mov_Desc,
      //     Mov_Type,
      //     Mov_Link,
      //     id,
      //   ]
      // );
      let movieData1 = await excuteQuery(
        "delete from cast_t where Cast_Mov=?;",
        [id]
      );
      let movieData2 = await excuteQuery(
        "delete from directing where Dir_Mov=?;",
        [id]
      );
      let movieData3 = await excuteQuery(
        "insert into cast_t (`Cast_Mov`, `Cast_Act`) values (?,?);",
        [id, Mov_Cast_1]
      );
      let movieData4 = await excuteQuery(
        "insert into cast_t (`Cast_Mov`, `Cast_Act`) values (?,?);",
        [id, Mov_Cast_2]
      );
      let movieData5 = await excuteQuery(
        "insert into cast_t (`Cast_Mov`, `Cast_Act`) values (?,?);",
        [id, Mov_Cast_3]
      );
      let movieData6 = await excuteQuery(
        "insert into directing (`Dir_Mov`, `Dir_Dir`) values (?,?);",
        [id, Mov_Dir]
      );
      res
        .status(200)
        .json(
          movieData,
          movieData1,
          movieData2,
          movieData3,
          movieData4,
          movieData5,
          movieData6
        );
    } else {
      res.status(404).json(`Movie to id=${id} not found`);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export { getAllMovies, getMovieById, deleteMovieById, saveMovie, updateMovie };
