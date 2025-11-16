# Simple React Movie App

A simple yet functional movie discovery app built with **React** and **Vite**.  
This project was mainly created as a **learning project for React**, helping me practice core concepts by building a real-world style application that interacts with an external API.

---

## Features

- Browse popular movies fetched from The Movie Database (TMDB) API
- Search movies by title
- View basic movie information (title, release year, poster)
- Mark/unmark movies as favorites
- View a separate favorites page
- Favorites are saved in `localStorage` so they persist across page reloads
- Responsive layout with custom CSS styling

---

## React Topics Practiced

This project was focused on learning and practicing key React concepts:

- **React with Vite**
  - Using Vite as a fast development bundler with React

- **Components & Props**
  - Building reusable components like `MovieCard`, `NavBar`, `Home`, and `Favourites`
  - Passing data through props and rendering lists with `Array.map`

- **React Router**
  - Setting up client-side routing with `react-router-dom`
  - Using `BrowserRouter`, `Routes`, `Route`, and `Link`
  - Creating pages: Home (`/`) and Favourites (`/favourites`)

- **State Management with Hooks**
  - Using `useState` for:
    - Search input value
    - Movie list
    - Loading and error states
    - Favorites list

- **Side Effects with `useEffect`**
  - Fetching popular movies when the component mounts
  - Synchronizing favorites with `localStorage`

- **Context API & Custom Hooks**
  - Creating a `MovieContext` to manage global favorites state
  - Providing global state via `MovieProvider`
  - Creating and using a custom hook `useMovieContext` to consume context
  - Sharing logic between components without prop drilling

- **Working with APIs**
  - Using the TMDB REST API with `fetch`
  - Handling async operations with `async/await`
  - Basic error handling and fallback UI

- **Forms & Controlled Inputs**
  - Controlled search input field
  - Handling form submit events
  - Preventing default browser behavior and validating input

- **Conditional Rendering**
  - Showing loading spinners, error messages, and empty states
  - Toggling favorite button appearance based on state

- **Local Storage**
  - Persisting the favorites list using `localStorage`
  - Initializing React state from stored data

---

## Tech Stack

- **Frontend:** React, Vite
- **Routing:** React Router (`react-router-dom`)
- **Styling:** Custom CSS
- **Data Source:** [The Movie Database (TMDB) API](https://developer.themoviedb.org/)

---

## Getting Started

### Prerequisites

- **Node.js** (recommended v16+)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone [https://github.com/devmahbe/Simple-React-Project.git](https://github.com/devmahbe/Simple-React-Project.git)
