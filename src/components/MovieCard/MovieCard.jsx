import { Link } from "react-router-dom"

export default function MovieCard(props) {
  return (
    <>
        <Link to={`/movies/${props.movie.title}`}>
        <div style={{"background": `url(${props.movie.posterPath})`}} >
            <div>
                <h1>{props.movie.title}</h1>
                <h4>Released: {props.movie.releaseDate}</h4>
            </div>
        </div>
        </Link>
    </>
    );
}