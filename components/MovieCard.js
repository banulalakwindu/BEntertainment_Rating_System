import Image from "next/dist/client/image";
import { StarIcon } from "@heroicons/react/solid";

const MovieCard = ({
  Title,
  Director,
  Character,
  Year,
  Language,
  Age,
  Ratings,
  Link,
}) => {
  return (
    <div>
      <div className="mx-auto h-80 w-56 bg-white overflow-hidden relative rounded-xl border-2 border-slate-600 transition duration-300 ease-in-out hover:border-cyan-500 group">
        <Image
          priority="true"
          src={Link}
          layout="fixed"
          objectFit="cover"
          height={320}
          width={225}
        />
        <div className="h-20 w-20 rounded-full bg-gray-900 absolute z-50 bottom-64 left-40 opacity-75"></div>
        <p className="absolute z-50 top-3 right-3 text-xl font-bold text-white">
          {Age == "-" ? "N" : Age}
        </p>
        <div className="absolute z-100 top-28 right-0 h-72 w-56 bg-gradient-to-t from-black transition duration-300 ease-in-out group-hover:-translate-y-12"></div>
        <p className="absolute z-50 bottom-24 left-4 font-bold text-2xl capitalize text-white">
          {Title}
        </p>
        <p className="absolute z-50 bottom-20 left-4 text-md text-white">
          {Year}
        </p>
        <p className="absolute z-50 bottom-16 left-4 text-md text-white">
          {Director}
        </p>
        <p className="absolute z-50 bottom-12 left-4 text-md text-white">
          {Language}
        </p>
        <div className="absolute z-50 bottom-2 right-2 text-yellow-400 flex">
          <StarIcon className=" h-6 w-6 " />
          <p>{Ratings}</p>
        </div>
        <p className="absolute z-50 bottom-2 left-2 text-md text-yellow-400">
          {Year}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
