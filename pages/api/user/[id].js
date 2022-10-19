import nc from "next-connect";
import {
  getUserById,
  deleteUserById,
  updateUser,
} from "../../../controller/user/user";

const handler = nc();
handler.get(getUserById);
handler.delete(deleteUserById);
handler.put(updateUser);
export default handler;
