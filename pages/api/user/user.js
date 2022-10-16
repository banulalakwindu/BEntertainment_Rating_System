import nc from "next-connect";
import { getAllUsers, saveUser } from "../../../controller/user/user";

const handler = nc();
handler.get(getAllUsers);
handler.post(saveUser);

export default handler;
