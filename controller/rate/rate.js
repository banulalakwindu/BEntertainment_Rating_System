import { excuteQuery } from "../../config/db";

const getAllRates = async (req, res) => {
  let ratesData = await excuteQuery("SELECT * FROM RATE", []);
  res.send(ratesData);
};

export { getAllRates };
