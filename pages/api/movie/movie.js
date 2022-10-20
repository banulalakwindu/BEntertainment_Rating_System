import nc from "next-connect";
import { getAllMovies, saveMovie } from "../../../controller/movie/movie";

const handler = nc();
handler.get(getAllMovies);
handler.post(saveMovie);
export default handler;
