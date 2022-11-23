import React from "react";
import Like from "./like";
import { Link } from "react-router-dom";
export default function moviesTable() {
  const { allMovies, onDelete, onLike } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("genre.name")}>Title</th>
          <th onClick={() => onSort("numberInStock")}>Title</th>
          <th onClick={() => onSort("dailyRentalRate")}>Title</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {allMovies.map((movie) => (
          <tr key={movie._id}>
            <td>
              <Link to={`/${movie._id}`}>{movie.title}</Link>
            </td>
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
  );
}
