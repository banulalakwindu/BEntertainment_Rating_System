import MovieCard from "./MovieCard";

const MovieList = ({ movData }) => {
  return (
    <div>
      <div className="mx-4 py-8 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 ">
        {movData.map((movie, index) => (
          <MovieCard
            key={index}
            Id={movie.Mov_Id}
            Title={movie.Mov_Name}
            Director={movie.Dir_Name}
            Character={movie.Act_Name}
            Year={movie.Mov_Year}
            Language={movie.Mov_Lang}
            Age={movie.Mov_Age}
            Ratings={movie.Mov_Rate}
            LinkM={movie.Mov_Link}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
