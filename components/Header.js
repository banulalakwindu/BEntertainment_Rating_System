import Image from "next/dist/client/image";
import { UserIcon, UsersIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-gradient-to-r from-sky-900 to-gray-900">
        <div className="flex my-4 ml-4">
          <Image src="/favicon.ico" width={40} height={40} layout="fixed" />
          <p className="hidden sm:inline-block pl-4 text-white font-bold text-3xl capitalize">
            Entertainment
          </p>
        </div>
        <div className="flex">
          <a
            className="h-16 w-28 flex uppercase font-bold px-6 py-5 mx-auto text-white hover:bg-sky-800 hover:text-white transition delay-150 duration-300 ease-in-out"
            href="/"
          >
            Movies
          </a>
          <a
            className="h-16 flex uppercase font-bold px-3 py-5 mx-auto text-white hover:bg-sky-800 hover:text-white transition delay-150 duration-300 ease-in-out"
            href="/tvpage"
          >
            TV-Shows
          </a>
        </div>
        <div className="flex">
          <a
            className="flex uppercase font-bold px-3 py-1 mr-4 text-white bg-sky-800 rounded-md hover:bg-sky-600 hover:text-white transition duration-300 ease-in-out"
            href="/adduser"
          >
            <UserIcon className=" h-5 w-5 m-auto pr-1" />
            SignUp
          </a>
          <a
            className="flex uppercase font-bold px-3 py-1 mr-4 text-white bg-sky-800 rounded-md hover:bg-sky-600 hover:text-white transition duration-300 ease-in-out"
            href="/admin"
          >
            <UsersIcon className=" h-5 w-5 m-auto pr-1" />
            Admin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
