import React from "react";
import "../styles/MovieCard.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
  const handleClick = () => {
    window.open(`https://www.themoviedb.org/movie/${movie.id}`, "_blank");
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      {/* Rating badge */}
      <div className="rating-badge">{Math.round(movie.vote_average * 10)}%</div>

      {/* Movie Poster */}
      <img
        src={
          movie.poster_path
            ? IMAGE_BASE_URL + movie.poster_path
            : "/placeholder.png"
        }
        alt={movie.title}
      />

      {/* Overlay with title and info */}
      <div className="overlay">
        <h3>{movie.title}</h3>
        <p>Release: {movie.release_date}</p>
        
      </div>
    </div>
  );
};

export default MovieCard;
