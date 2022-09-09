import { excuteQuery } from "../../config/db";

const getAllMovies = async (req, res) => {
  let moviesData = await excuteQuery("SELECT * FROM MOVIE", []);

  res.send(moviesData);
  // if (moviesData != null) {
  //   let directorData = await excuteQuery("SELECT * FROM DIRECTOR", []);
  //   res.send(directorData);
  // }
};

export { getAllMovies };
