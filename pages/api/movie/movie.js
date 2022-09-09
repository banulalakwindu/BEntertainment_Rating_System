import nc from "next-connect";
import { getAllMovies } from "../../../controller/movie/movie";

const handler = nc();
handler.get(getAllMovies);

export default handler;
