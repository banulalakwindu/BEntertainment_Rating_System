import nc from "next-connect";
import {
  getMovieById,
  deleteMovieById,
  updateMovie,
} from "../../../controller/movie/movie";

const handler = nc();
handler.get(getMovieById);
handler.delete(deleteMovieById);
handler.put(updateMovie);
export default handler;
