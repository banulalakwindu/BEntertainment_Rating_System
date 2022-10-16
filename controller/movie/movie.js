import { excuteQuery } from "../../config/db";

const getAllMovies = async (req, res) => {
  try {
    let moviesData = await excuteQuery(
      "SELECT * FROM ratingdb.movie inner join ratingdb.director on Mov_Id = Dir_Id;",
      []
    );
    res.send(moviesData);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getMovieById = async (req, res) => {
  let id = req.query.id;
  try {
    let movIdData = await excuteQuery(
      `select * from ratingdb.movie where Mov_Id=${id};`,
      []
    );
    res.status(200).json(movIdData);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteMovieById = async (req, res) => {
  let id = req.query.id;
  try {
    let delemovIdData = await excuteQuery(
      `delete from ratingdb.movie where Mov_Id=${id};`,
      []
    );
    res.status(200).json(delemovIdData);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { getAllMovies, getMovieById, deleteMovieById };
