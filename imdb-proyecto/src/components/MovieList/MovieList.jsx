import { useState } from "react";
import './MovieList.css'



export function Movie({ movies }) {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 20;

  // Calcular índice de películas a mostrar
  const indexOfLast = currentPage * moviesPerPage;
  const indexOfFirst = indexOfLast - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    else if (currentPage == totalPages) setCurrentPage (1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
    else if (currentPage == 1) setCurrentPage(totalPages);
  };

  return (
    <div className="container my-4" >
      <h1 className="text-center mb-4" >Listado de Películas</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Título</th>
            <th>Director</th>
            <th>Año</th>
            <th>Género</th>
            <th >IMDB Rating</th>
          </tr>
        </thead>
        <tbody>
          {currentMovies.map((movie, index) => (
            <tr  key={index} >
              <td>{movie.Director}</td>
              <td>{movie.Series_Title}</td>
              <td>{movie.Released_Year}</td>
              <td>{movie.Genre}</td>
              <td>{movie.IMDB_Rating}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botones de paginación */}
      <div className="d-flex justify-content-center gap-2 mt-3">
        <button className="btn btn-secondary" onClick={handlePrev}>
          Anterior
        </button>
        <span className="align-self-center">
          Página {currentPage} de {totalPages}
        </span>
        <button className="btn btn-secondary" onClick={handleNext}>
          Siguiente
        </button>
      </div>
    </div>
  );
}
