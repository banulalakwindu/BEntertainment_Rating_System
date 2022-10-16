import MovieCard from "./MovieCard";

const MovieList = ({ movData }) => {
  return (
    <div>
      <div className="mx-4 py-8 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 ">
        {movData.map((movie, index) => (
          <MovieCard
            key={movie.Mov_Id}
            Title={movie.Mov_Name}
            Director={movie.Mov_Dir}
            Character={movie.Mov_Cast_1}
            Year={movie.Mov_Year}
            Language={movie.Mov_Lang}
            Age={movie.Mov_Age}
            Ratings={movie.Mov_Rate}
            Link={movie.Mov_Link}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
