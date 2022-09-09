import nc from "next-connect";
import { getAllDirectors } from "../../../controller/director/director";

const handler = nc();
handler.get(getAllDirectors);

export default handler;
