import { excuteQuery } from "../../config/db";

const getAllCasts = async (req, res) => {
  let castsData = await excuteQuery("SELECT * FROM CAST_TABLE", []);
  res.send(castsData);
};

export { getAllCasts };
