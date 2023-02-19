import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import SearchBox from './SearchBox'
import MovieList from './MovieList'

function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const getMovieRequest = async (searchValue)=> {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=965d21ae`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if(responseJson.Search){
      console.log(responseJson.Search);
      setMovies(responseJson.Search);
    }
  };
  useEffect(()=>{
    getMovieRequest(searchValue)
  }, [searchValue]);

  return (
    <div className="App">
      <Header />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      <MovieList movies = {movies} />
    </div>
  )
}

export default App
