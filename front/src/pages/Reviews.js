import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/pages/Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <main className="reviews-container">
      <h2 className="reviews-title">Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="review-box">
          <img src={review.imagen} alt={review.titulo} className="review-img" />
          <h3 className="review-title">{review.titulo}</h3>
          <p className="review-text">{review.contenido}</p>
        </div>
      ))}
    </main>
  );
}

export default Reviews;
