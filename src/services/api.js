const API_KEY="905de02d80d5f71248d50d9ad08f284c";
const BASE_URL ="https://api.themoviedb.org/3";

export const getPopularMovies = async() =>{
    
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return Array.isArray(data.results) ? data.results : [];
    //this will return the array of movies
    //data is the response object
    //results is the array of movies
} ;

export const searchMovies = async(query) =>{ 
    
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        //encodeURIComponent will encode the query
        //encodedURIComponent means it will convert the special characters to their equivalent URL encoded characters
        //for example it will convert the space to %20
        //encodeURIComponent is a built in function in javascript
    const data = await response.json();
    return Array.isArray(data.results) ? data.results : [];
    //this will return the array of movies
    //data is the response object
    //results is the array of movies
} ;