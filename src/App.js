import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Switch from 'react-bootstrap/esm/Switch';
import data from './movies.json';
import { useState } from 'react';
import Movies from './components/Movies';
import AddMovie from './components/AddMovie';

function App() {

  const [movies, setMovies] = useState(data);

  const updateMovies = (newMovies) => {
    setMovies(newMovies);
  }

  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={() => <Movies movies={movies} update={updateMovies}/>}></Route>
          <Route path="/add" exact component={() => <AddMovie movies={movies} update={updateMovies}/>}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
