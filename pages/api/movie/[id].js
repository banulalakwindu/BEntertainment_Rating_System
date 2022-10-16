import nc from "next-connect";
import { getMovieById, deleteMovieById } from "../../../controller/movie/movie";

const handler = nc();
handler.get(getMovieById);
handler.delete(deleteMovieById);
export default handler;
