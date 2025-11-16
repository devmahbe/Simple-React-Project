import MovieCard from "../components/MovieCards";
import { useState, useEffect } from "react";
import { searchMovies } from "../services/api";
import { getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  //this will be use to store the search query
  //useState is a hook
  //useState returns an array of two elements
  //first element is the state variable
  //second element is the function to update the state variable
  const [searchQuery, setSearchQuery] = useState("");

  //We dont want to fetch movies consantly
  //We want to fetch movies only when the component is mounted
  //We can use useEffect hook for this
  //useEffect allows us to add side effects to our funcitons or to our components and define when should they run
  //useEffect takes two arguments
  //first argument is the function that we want to run
  //second argument is the dependency array
  //if the dependency array is empty then the function will run only once when the component is mounted

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // we need these more const because we want to show loading state and error state when fetching movies

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(Array.isArray(popularMovies) ? popularMovies : []);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch popular movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);
  //The second bracket is empty means it will run only once when the component is mounted
  //The first argument is the function that we want to run
  //this will run only once when the component is mounted
  // THe trird bracket is empty means it will run only once
  //if the dependency array is not empty then the function will run every time the dependency array changes

  const handleSearch = async(e) => {
    e.preventDefault();
    if(!searchQuery.trim()){
        alert("Please enter a search query");
        return;
    }
    if(loading){
        return;
    }
    setLoading(true);
    try{
      const searchResults = await searchMovies(searchQuery);
      setMovies(Array.isArray(searchResults) ? searchResults : []);
      setError(null);

    }catch{
      setError("Failed to fetch movies");

    }finally{
        setLoading(false);
    }
    


   setSearchQuery("");
     
  };

  //State - is something where once its updates , the component re-renders itself to show the new state

  return (
    // When we dynamically render the components then we have to use key prop
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies...."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          //onchange is an event handler
          //e.target.value is the value of the input field
          //setSearchQuery is the function to update the state variable
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
          {error && < div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            //(movie.title.toLowerCase().startsWith(searchQuery)
            //This will check if the movie title starts with the search query
            //If the movie title starts with the search query then it will render the movie cards
            //else it will not render the movie cards
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
