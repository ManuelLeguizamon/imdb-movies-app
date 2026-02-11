import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imdb_data from './data/imdb_movies_clean.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//-------------------------------------------------------------------------
import { Movie } from './components/MovieList/MovieList';
import { Footer } from './components/Footer/FooterGrl';
import { Analisis } from './components/Analisis/analisis';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => { setMovies(imdb_data); }, [] )

  return (
    <>      
      <Movie movies={movies} />
      <Analisis />
      <Footer />
    </>
  );
}


export default App
