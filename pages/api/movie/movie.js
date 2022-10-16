import nc from "next-connect";
import { getAllMovies, createMovie } from "../../../controller/movie/movie";

const handler = nc();
handler.get(getAllMovies);
// handler.post(createMovie);

export default handler;
