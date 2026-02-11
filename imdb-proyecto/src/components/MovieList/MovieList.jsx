import { useState, useEffect, Fragment } from "react";
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



  // Para el desplegabla con info de la peli
  const [info, setInfo] = useState(null)

  return (
    <div className="container my-4" >
      <h1 className="text-center mb-4" >Top 1000 IMDB Movies</h1>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by movie or director..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="table-container table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Director</th>
              <th>Released</th>
              <th>Genre</th>
              <th>Rating</th>
            </tr>
          </thead>

          <tbody>
            {currentMovies.map((movie) => {
              const isOpen = info?.Name === movie.Name

              return (
                <Fragment key={movie.Name}>
                  <tr
                    onClick={() =>
                      setInfo(prev =>
                        prev && prev.Name === movie.Name ? null : movie
                      )
                    }
                    className={`fila ${isOpen ? "active" : ""}`}
                  >
                    <td><b>{movie.Name}</b></td>
                    <td>{movie.Director}</td>
                    <td>{movie.Released_Year}</td>
                    <td>{movie.Genre}</td>
                    <td>{movie.Rating}</td>
                  </tr>

  {/* INFO DESPLEGABLE */}
                  {isOpen && (
                    <tr className="info-row">
                      <td colSpan={5} className="info-td">
                        <div className="info-box">
                          <div className="info-A">
                            {/* <h5>{movie.Name}</h5> */}
                            <p>{movie.Overview}</p>
                            <p><strong>Runtime:</strong> {movie.Runtime} </p>
                          </div>

                        <div className="info-line"> </div>
                        <hr className="info-hr" />
                          <div className="info-B">     
                            <div className="div-actors">
                              <h5><strong>Main actors:</strong></h5>
                              <ul>
                                <li>{movie.Star1}</li>
                                <li>{movie.Star2}</li>
                                <li>{movie.Star3}</li>
                              </ul>
                            </div>                       
                            <p><strong>Gross:</strong> {movie.Gross}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              )
            })}
          </tbody>
        </table>
      </div>


      {/* Botones de la tabla */}
      <div className="d-flex justify-content-center gap-2 mt-4 mb-3">
        <button className="btn btn-secondary" onClick={handlePrev}>Previous</button>
        <span className="align-self-center">Page {currentPage} of {totalPages}</span>
        <button className="btn btn-secondary" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
