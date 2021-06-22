import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList/MovieList";
import Searchbar from "./components/Searchbar/Searchbar";
import Saved from "./containers/Saved";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=5eb778cb`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <h2>OMDB Search</h2>

      <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
