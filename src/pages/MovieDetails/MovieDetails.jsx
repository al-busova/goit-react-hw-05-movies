import { Link, Outlet } from "react-router-dom";
import { MovieCard } from "components/MovieCard/MovieCard";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const { movieId } = useParams();
  return (
    <main>
      <MovieCard id={movieId} />
      <section>
        <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews"> reviews</Link>
        </li>
        </ul>
      </section>
        
      <Outlet />
    </main>
  );
};