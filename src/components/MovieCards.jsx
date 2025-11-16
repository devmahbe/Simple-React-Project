import '../css/MovieCard.css';
import { useMovieContext } from '../contexts/MovieContext';
function MovieCard({movie}){

    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext();

     const favorite = isFavorite(movie.id);


    //In JSX, rather than having classs, which is reserved keyword in JS , 
    //we use className so we dont gen any coinflict with JS keywords
   function onFavoriteClick(e){ 
     e.preventDefault();
     if (favorite) removeFromFavorites(movie.id);
     else addToFavorites(movie);
   }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    {/* if favorite is true then add the active class */}
    
                       ♥
                </button>
            </div>
            
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
 


    </div>
}
 //Props let us pass data from one component to another
 //In this case we are passing the movie object to the MovieCard component
 //Key is a special prop that is used to identify the element in the list
 //Key is used to optimize the rendering of the list
 //Now we have to export it


export default MovieCard;