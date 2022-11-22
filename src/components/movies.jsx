import { Fragment, useState } from "react";
import { getMovies } from "./../services/fakeMovieService";
import Pagination from "./common/pagination";
import {Paginate, paginate} from './utils/paginate';
import Like from "./like";
function Movies() {
  const [movies, setMovies] = useState(getMovies);
  const [pageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const allMovies = Paginate(movies, currentPage,pageSize);

  const handleDelete = (movie) => {
    setMovies(movies.filter((m) => m._id !== movie._id));
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

  return (
    <Fragment>
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
    </Fragment>
  );
}

export default Movies;
