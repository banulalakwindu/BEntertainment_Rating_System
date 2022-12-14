import { StarIcon } from "@heroicons/react/solid";
import { useRouter } from "../node_modules/next/router";

const MovieCard = ({ Id, Title, Year, Language, Age, Ratings, LinkM }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/movfull/${Id}`)}>
      <div className="mx-auto h-80 w-56 bg-white overflow-hidden relative rounded-md border-2 border-slate-200 transition duration-300 ease-in-out hover:border-sky-700 group">
        <img
          priority="true"
          src={LinkM}
          layout="fixed"
          objectFit="cover"
          height={320}
          width={225}
        />
        <div className="h-20 w-20 rounded-full bg-gray-900 absolute z-10 bottom-64 left-40 opacity-75"></div>
        <p className="absolute z-10 top-3 right-3 text-xl font-bold text-white">
          {Age == "-" ? "N" : Age}
        </p>
        <div className="absolute z-10 top-28 right-0 h-72 w-56 bg-gradient-to-t from-black transition duration-300 ease-in-out group-hover:-translate-y-12"></div>
        <p className="absolute z-10 bottom-24 left-4 font-bold text-2xl capitalize text-white">
          {Title}
        </p>
        <p className="absolute z-10 bottom-12 left-4 text-md text-white">
          {Language}
        </p>
        <div className="absolute z-10 bottom-2 right-2 text-yellow-400 flex">
          <StarIcon className=" h-6 w-6 " />
          <p>{Ratings == null ? 10 : Ratings}</p>
        </div>
        <p className="absolute z-10 bottom-2 left-2 text-md text-yellow-400">
          {Year}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
