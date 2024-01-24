import React from 'react';
import star from '../images/star.png';
import photo1 from '../images/katie-zaferes.png';
import photo2 from '../images/wedding-photo.png';
import photo3 from '../images/mountain-bike.png';

const photoMap = {
  1: photo1,
  2: photo2,
  3: photo3,
};

const ProductCard = (props) => {
  const selectedPhoto = photoMap[props.id]

  return (
    <div className="first-card">
      <p>Sold Out</p>
      <img src={selectedPhoto} alt={props.img} className="img"/>
      <section className="section-1">
        <img src={star} alt="rating star" className="first-star" />
        <p>{props.rating}</p>
        <span>({props.review})•{props.location} </span>
      </section>
      <section className="section-2">
        <p>{props.title}</p>
        <p><strong>From ${props.price}</strong> / person</p>
      </section>
    </div>
  )
}

export default ProductCard;