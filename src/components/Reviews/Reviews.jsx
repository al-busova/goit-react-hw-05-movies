import { getMovieReviews } from "MovieApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  
    useEffect(() => {
    getMovieReviews(movieId).then(result => {
      setReviews(result);
  });
    }, [movieId]);
 
  return (
    <section>
       {(reviews.length !== 0) ? (<ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>): (<p>We don't have any reviews for this movie.</p>)}
    </section>
  );
};