import nc from "next-connect";
import { getMovieById } from "../../../controller/movie/movie";

const handler = nc();
handler.get(getMovieById);
// handler.delete(deleteEmployeeById);
// handler.put(updateEmployee);
export default handler;
