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
    let movData = await executeQuery(
      "select * from ratingdb.movie where Mov_Id=${id};",
      []
    );
    res.status(500).json(movData);
  } catch (err) {
    res.status(500).json(err);
  }
};

export { getAllMovies, getMovieById };
