import MovieCard from "./MovieCard";

const movies = [
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
  {
    Title: "The Musketeers",
    Director: "Adrian Hodges",
    Year: "2014",
    Language: "English",
    Age: "15",
    Ratings: "5",
    Link: "/TV/musk.jpg",
  },
];

const TVList = () => {
  return (
    <div>
      <div class="mx-4 py-8 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 ">
        {movies.map((movie) => (
          <MovieCard
            Title={movie.Title}
            Director={movie.Director}
            Character={movie.Character}
            Year={movie.Year}
            Language={movie.Language}
            Age={movie.Age}
            Ratings={movie.Ratings}
            Link={movie.Link}
          />
        ))}
      </div>
    </div>
  );
};

export default TVList;
