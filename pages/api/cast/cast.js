import nc from "next-connect";
import { getAllCasts } from "../../../controller/cast/cast";

const handler = nc();
handler.get(getAllCasts);

export default handler;
