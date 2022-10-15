import { excuteQuery } from "../../config/db";

const getAllDirectors = async (req, res) => {
  let directorData = await excuteQuery(
    "SELECT * FROM ratingdb.movie inner join ratingdb.director on Mov_Id = Dir_Id;",
    []
  );
  res.send(directorData);
};

export { getAllDirectors };
