import React from 'react';
import kenzie from '../images/katie-zaferes.png';
import star from '../images/star.png';


const ProductCard = () => {
  return (
    <div className="first-card">
      <p>Sold Out</p>
      <img src={kenzie} alt="kenzie-zaferes" className="kenzie"/>
      <section className="section-1">
        <img src={star} alt="rating star" className="first-star" />
        <p>5.0</p>
        <span>(6)•USA </span>
      </section>
      <section className="section-2">
        <p>Life lessons with Katie Zaferes</p>
        <p><strong>From $136</strong> / person</p>
      </section>
    </div>
  )
}

export default ProductCard;