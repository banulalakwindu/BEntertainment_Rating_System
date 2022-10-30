import nc from "next-connect";
import { getRateById } from "../../../controller/rate/rate";

const handler = nc();
handler.get(getRateById);
export default handler;
