import * as React from 'react'
import classnames from 'classnames'

import Gallery from '../gallery'
// import Map from '../map'

import { asCurrency } from '../../utils/number'
import styles from './styles.module.css'

function ProductDetails({ listing }) {
  if (!listing) {
    return (
      <React.Fragment>
        <div>
          <div><h3>No product found!</h3></div>
        </div>
      </React.Fragment>
    )
  }

  const { image, title, description, price } = listing
  const priceClasses = classnames(styles.price, 'text-success', 'text-right')

  return (
    <div className={styles.detailcontainer}>
      <div className="columns">
        <div className="column col-9 col-xs-12">
          <h2>{title}</h2>
          <h3 className="text-dark text-small mb-1">{description} Shipping:FREE Economy International Shipping</h3>
        </div>
      </div>
      <div className="columns">
        <div className="column col-6 col-xs-12">
          <Gallery image={image} title={title} price={price.value}/>

          <div className="column flex">
            <div className="more-details">
              Returns:<br />30 day returns. Buyer pays for return shipping <a href="#">See details</a>
            </div>
            <div className="flex btn-container">
              <h5 className={priceClasses}>
                <small>Price </small>
                $ 
                {asCurrency(price.value)}
              </h5>
              <button className="btn-buy">Buy it Now</button>
            </div>
            
          </div>
        </div>
      </div>      
    </div>
  )
}

export default ProductDetails
