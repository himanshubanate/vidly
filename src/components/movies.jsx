import { Fragment, useState } from "react";
import { getMovies } from "./../services/fakeMovieService";
function Movies() {
  const [movies, setMovies] = useState(getMovies);

  const handleDelete = (movie) => {
    setMovies(movies.filter((m) => m._id != movie._id));
  };

  const { length: count } = movies;
  if (count === 0) return <p>There are no movies in the database</p>;

  return (
    <Fragment>
      <p>Showing {count} movie in the database</p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Gnere</th>
            <th>Stock</th>
            <th>Rate</th> <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <th>{movie.title}</th>
              <th>{movie.genre.name}</th>
              <th>{movie.numberInStock}</th>
              <th>{movie.dailyRentalRate}</th>
              <th>
                <button
                  onClick={() => handleDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </Fragment>
  );
}

export default Movies;
