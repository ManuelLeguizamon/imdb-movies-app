import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imdb_data from './data/imdb_movies.json';

import { Movie } from './components/MovieList/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => { setMovies(imdb_data); }, [] )

  return (
    <>
      < Movie movies={movies} />
    </>
  )
}

export default App
