import React from 'react';
import {Review} from "../review/review";
import {useSelector} from "react-redux";
import {NameSpace} from "../../store/reducer";

const FilmReviews = () => {
  const {reviewsForActiveFilm} = useSelector((state) => state[NameSpace.DATA]);

  let firstHalfReviews = reviewsForActiveFilm;
  let secondHalfReviews = [];
  // @review магические числа в константы
  if (reviewsForActiveFilm.length > 1) {
    // @review магические числа в константы
    const halfIndex = Math.floor(reviewsForActiveFilm.length / 2);
    firstHalfReviews = [...reviewsForActiveFilm].splice(0, halfIndex);
    secondHalfReviews = [...reviewsForActiveFilm].splice(-halfIndex);
  }

  return <div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {firstHalfReviews.map((review) => <Review key={review.id} review={review}/>)}
    </div>
    <div className="movie-card__reviews-col">
      {secondHalfReviews.map((review) => <Review key={review.id} review={review}/>)}
    </div>
  </div>;
};

export {FilmReviews};
