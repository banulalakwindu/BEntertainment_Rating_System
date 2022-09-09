import nc from "next-connect";
import { getAllTv } from "../../../controller/tv/tv";

const handler = nc();
handler.get(getAllTv);

export default handler;
