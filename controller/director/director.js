import { excuteQuery } from "../../config/db";

const getAllDirectors = async (req, res) => {
  let directorData = await excuteQuery("SELECT * FROM DIRECTOR", []);
  res.send(directorData);
};

export { getAllDirectors };
