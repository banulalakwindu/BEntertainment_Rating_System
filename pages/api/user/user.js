import nc from "next-connect";
import { getAllUser } from "../../../controller/tv/tv";

const handler = nc();
handler.get(getAllUser);

export default handler;
