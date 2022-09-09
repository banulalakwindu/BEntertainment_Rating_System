import nc from "next-connect";
import { getAllRates } from "../../../controller/rate/rate";

const handler = nc();
handler.get(getAllRates);

export default handler;
