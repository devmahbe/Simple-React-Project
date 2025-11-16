import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import {Routes,Route} from "react-router-dom";  //This is used to define the routes
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';


//A component is a function in JS that returns kind of JSX (HTML) codes
// function App() {
  
// <> </> // This is called fragment 

//Simple Examples how components works


//   return (
//   <> 
//       <div>
//         <p> Hello World</p>
        
//     </div>
//     <Text display="Hello Mahbubur Rahman" />
//     </>
    
//   )
// } 


 //This is Another component 
//  WE can insert Properties in the component 



// function Text({display}) {

//   return(

//     <div>
//       <p>{display}</p>
//     </div>
//   );

// }



 //Another Example
// import MovieCard from './components/MovieCards';

 //If we used named export then we have to use
//  import {MovieCard} from './components/MovieCards';
// function App(){
//   const movieNumber=2; // we will use it on conditional rendering . Like if movieNumber is 1 then show Inception else show Intersteller
  // or we can use the && logic which works like if movieNumber is 1 then show Inception else show Intersteller
//   return(
//     <>
//     {movieNumber===1 ? <MovieCard movie={{title:"Inception", release_date:"2010"}} /> :  <MovieCard movie={{title:"Intersteller", release_date:"2014"}} />}

   
//     </>

//   );
// }








function App(){
  return(
    //The main tag is used to wrap the routes
    //Because we are using the BrowserRouter which is a component
    //So we have to wrap the routes with the main tag
    // The <main> element represents the dominant content 
    // of the <body> of a document. 
    // It tells browsers, screen readers, 
    // and search engines "this is the primary content of the page."
    <MovieProvider>
      <NavBar />
   <main className ="main-content">
{/*// This route path means the path of the component
// and the element means the component  */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favourites" element={<Favourites />} /> 

    </Routes>
   </main>
   </MovieProvider>
   // now we can access the 'context' we created from any component
   // we can use the useMovieContext hook to access the context

  );
}




export default App
