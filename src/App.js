import { useState } from 'react';
import './App.css';
import './components/poster.style.css';
import { getMovies } from './services/movie-service';
import { Poster } from './components/poster.component';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  function fetchMovies() {
    setLoading(true);
    getMovies().then(result => {
      setMovies(result);
      setLoading(false);
    })
  }

  return (
    <div className="App">
      { movies.length === 0 && !loading ? 
        (<button onClick={fetchMovies} className="fetch-btn">Hämta filmer</button>) : <></>}
      { movies.length === 0 && loading ? 
        (<img className="spinner" src="spinner.png" alt="Vänligen vänta"/>) : <></>}
      <div className="poster-grid">
        {movies.map((m, i) => (
          <Poster data={m} key={i}></Poster>
        ))}
      </div>
    </div>
  );
}

export default App;
