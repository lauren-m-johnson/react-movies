import MovieCard from "../../components/MovieCard/MovieCard";
import './MovieList.css';

export default function MovieListPage(props) {
    return (
        <div>
            {
                props.movies.map(movie => {
                    return <MovieCard key={movie.title} movie={movie} />
                })
            }
        </div>
    );
}