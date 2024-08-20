import React from 'react';
import '../../styles/pages/Reviews.css'; 

const ReviewItem = ({ titulo, contenido, imagen }) => {
  return (
    <div className="review-item">
      <img src={imagen} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
};

export default ReviewItem;
