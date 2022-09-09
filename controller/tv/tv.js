import { excuteQuery } from "../../config/db";

const getAllTv = async (req, res) => {
  let tvData = await excuteQuery("SELECT * FROM TV", []);
  res.send(tvData);
};

export { getAllTv };
