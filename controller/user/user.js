import { excuteQuery } from "../../config/db";

const getAllUser = async (req, res) => {
  let userData = await excuteQuery("SELECT * FROM USER_TABLE", []);
  res.send(userData);
};

export { getAllUser };
