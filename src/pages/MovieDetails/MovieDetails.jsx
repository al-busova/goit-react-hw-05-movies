import { Outlet,useParams, useLocation  } from "react-router-dom";
import { HiChevronLeft } from 'react-icons/hi';
import { MovieCard } from "components/MovieCard/MovieCard";
import { Container, AddTitle, AddList, Link } from "pages/pages.styled";
export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  console.log('loc st', location)
  return (
    <main>
      <Link to={backLinkHref}><HiChevronLeft/>Go back</Link>
      <MovieCard id={movieId} />
      <Container>
        <AddTitle>Additional information</AddTitle>
      <AddList>
        <li>
          <Link to="cast" state={{from:location.state.from}}>Cast</Link>
        </li>
        <li>
          <Link to= "reviews" state={{from:location.state.from}}>Reviews</Link>
        </li>
        </AddList>
      </Container>
      <Outlet />
    </main>
  );
};