import { Fragment, useState, useEffect } from "react";
import { getMovies } from "./../services/fakeMovieService";
import Pagination from "./common/pagination";
import { Paginate, paginate } from "./utils/paginate";
import Like from "./like";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
function Movies() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const allGenres = { _id: 0, name: "All Genres" };
  const [selectedGenre, setSelectedGenre] = useState(allGenres);
  useEffect(() => {
    setMovies(getMovies);
    setGenres([allGenres, ...getGenres()]);
  }, []);

  const filtered =
    selectedGenre && selectedGenre._id
      ? movies.filter((m) => m.genre._id === selectedGenre._id)
      : movies;

  const allMovies = Paginate(filtered, currentPage, pageSize);

  const handleDelete = (movie) => {
    setMovies(movies.filter((m) => m._id !== movie._id));
  };
  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };
  const { length: count } = movies;
  if (count === 0) return <p>There are no movies in the database</p>;

  const handleLike = (movie) => {
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    setMovies(
      movies.map((m) => {
        return m;
      })
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  <ListGroup items={genres} onItemSelect={handleGenreSelect} />;

  return (
    <div className="row">
      <div className="col-2">
        <ListGroup
          items={genres}
          textProperty="name"
          valueProperty="_id"
          selectedItem={selectedGenre}
          onItemSelect={handleGenreSelect}
        />
      </div>
      <div className="col">
        <p>Showing {count} movie in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Gnere</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allMovies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like liked={movie.liked} onClick={() => handleLike(movie)} />
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemCounts={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Movies;
