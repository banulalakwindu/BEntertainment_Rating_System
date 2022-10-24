import nc from "next-connect";
import {
  getUserByEmail,
  deleteUserByEmail,
  updateUser,
} from "../../../controller/user/user";

const handler = nc();
handler.get(getUserByEmail);
handler.delete(deleteUserByEmail);
handler.put(updateUser);
export default handler;
