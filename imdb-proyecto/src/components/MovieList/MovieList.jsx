import { useState, useEffect } from "react";
import './MovieList.css'

export function Movie({ movies }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const moviesPerPage = 10;

  // Filtrar películas según la búsqueda
  const filteredMovies = movies.filter((movie) =>
    movie.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.Director.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.Genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * moviesPerPage;
  const indexOfFirst = indexOfLast - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  useEffect(() => {
    setCurrentPage(1); // volver a la primera página al buscar
  }, [searchTerm]);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    else if (currentPage === totalPages) setCurrentPage(1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
    else if (currentPage === 1) setCurrentPage(totalPages);
  };

  return (
    <div className="container my-4" >
      <h1 className="text-center mb-4" >Top 1000 Peliculas de IMDB</h1>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Buscador por pelicula o director..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="table-container table-responsive">        
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Título</th>
              <th>Director</th>
              <th>Año</th>
              <th>Género</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {currentMovies.map((movie, index) => (
              <tr key={index}>
                <td><b>{movie.Name}</b></td>
                <td>{movie.Director}</td>
                <td>{movie.Released_Year}</td>
                <td>{movie.Genre}</td>
                <td>{movie.Rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Botones */}
      <div className="d-flex justify-content-center gap-2 mt-4 mb-3">
        <button className="btn btn-secondary" onClick={handlePrev}>Anterior</button>
        <span className="align-self-center">Página {currentPage} de {totalPages}</span>
        <button className="btn btn-secondary" onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
}
