import Header from "../components/Header";

const admin = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col px-20 mt-20">
        <div className="flex justify-center w-full py-5 ">
          <a
            href="/adduser"
            className="w-full mx-5 px-20 py-5 my-4 bg-sky-900 text-white text-xl rounded-lg text-center hover:bg-sky-700 duration-700"
          >
            Add User
          </a>
          <a
            href="/user"
            className="w-full mx-5 px-20 py-5 my-4 bg-sky-900 text-white text-xl rounded-lg text-center hover:bg-sky-700 duration-700"
          >
            User List
          </a>
        </div>

        <div className="flex justify-center w-full py-5 ">
          <a
            href="/addmovie"
            className="w-full mx-5 px-20 py-5 my-4 bg-sky-900 text-white text-xl rounded-lg text-center hover:bg-sky-700 duration-700"
          >
            Add Movie
          </a>
          <a
            href="/movie"
            className="w-full mx-5 px-20 py-5 my-4 bg-sky-900 text-white text-xl rounded-lg text-center hover:bg-sky-700 duration-700"
          >
            Movie List
          </a>
        </div>
      </div>
    </div>
  );
};

export default admin;
