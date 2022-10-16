import nc from "next-connect";
import { getUserById } from "../../../controller/user/user";

const handler = nc();
handler.get(getUserById);
export default handler;
