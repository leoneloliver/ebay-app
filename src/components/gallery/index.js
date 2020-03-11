import * as React from 'react'

function Gallery({ image, title, price }) {
  return (
    <figure className="figure flex">
      <div className="img-detail-container">
        <img className="img-responsive img-detail" src={`${image}`} alt={title} />
      </div>
       <div className="description">
        <figcaption className="figure-caption">{title}</figcaption>
        <figcaption className="figure-caption text-smaller"><p>30% of - Price today: $ {price}</p></figcaption>
        <figcaption className="figure-caption text-smaller">Shipping:FREE Economy International Shipping</figcaption>
     </div>
    </figure>
  )
}

export default Gallery
