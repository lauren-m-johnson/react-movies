import { Link } from "react-router-dom"
import "./MovieCard.css"; 

export default function MovieCard(props) {
  return (
    <div className="movie-card-container">
        <Link className="movie-card-link" to={`/movies/${props.movie.title}`}>
        <div 
        className="movie-card"
        style={{"background": `url(${props.movie.posterPath})`}} >
            <div>
                <h1>{props.movie.title}</h1>
                <h4>Released: {props.movie.releaseDate}</h4>
            </div>
        </div>
        </Link>
    </div>
    );
}