
import './App.css';
import MovieList from './components/Movielist'
import filme from './data/movie'

function App() {
  return (
    <div className="App">
      {filme.map((elt, i)=>
        <MovieList
          key={i}
          title={elt.title}
          year={elt.year}
          director={elt.director}
          duration={elt.duration}
          genre={elt.genre}
          rate={elt.rate}
        />
      )}
    </div>
  );
}

export default App;
