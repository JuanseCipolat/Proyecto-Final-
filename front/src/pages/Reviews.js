import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/pages/Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/reviews`);
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
        <div key={review.id} className="review-item">
          <h3>{review.titulo}</h3>
          <img src={review.imagen} alt={review.titulo} className="review-item-img" />
          <p>{review.contenido}</p>
        </div>
      ))}
    </main>
  );
}

export default Reviews;
