//this will provide some global state and some helper function to\
// so that we can use from multiple places 

import { createContext , useState,useContext,useEffect  } from "react"; 

const MovieContext = createContext();
export const useMovieContext=() => useContext(MovieContext);

export const MovieProvider =({children})=>{ // this will provide the global state to the components that are wrapped around it
 // Children is a reserved prop when
 //  you write a component and children is 
 // anything thats inside of the component that you rendered 


  const[favorites, setFavorites] = useState([]);

  useEffect(()=>{
    const storedFavs = localStorage.getItem("favorites");
    if(storedFavs){
        setFavorites(JSON.parse(storedFavs));
    }
  },[]);
  
  useEffect(()=>{
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },[favorites]);
  //Anytime this favourites changes it will update the local storage


  //Now we need 3 operations 

  const addToFavorites = (movie)=>{
    setFavorites( prev=> [...prev,movie]);
    // as just by simply pushing the movies wont update the state
    // we need to use the setFavourites to update the state
    // prev is the previous state
    // [...prev,movie] is the new state
    // so take the previous value then add the new movie to it
    // and update the state

  }

  const removeFromFavorites = (movieid)=>{
    setFavorites(prev => prev.filter(movie => movie.id !== movieid));
    // prev is the previous state
    // prev.filter(movie => movie.id !== movieid) is the new state
    // so take the previous value then remove the movie with the given id
    // and update the state
  }


  const isFavorite = (movieid)=>{
    return favorites.some(movie => movie.id === movieid);
  }


  const value={
   addToFavorites,
   removeFromFavorites,
   isFavorite,
   favorites
  }
  //value is an object that contains all the functions and state
  //value is then passed to the MovieContext.Provider
  //MovieContext.Provider is then passed to the children
  //children is anything thats inside of the component that you rendered


 return <MovieContext.Provider value={value}>

    {children}
 </MovieContext.Provider>
}