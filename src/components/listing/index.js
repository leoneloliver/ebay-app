import * as React from 'react'
import { Link } from 'react-router-dom';
import classnames from 'classnames'

import { asCurrency } from '../../utils/number'
import styles from './styles.module.css'

function Listing({ listing }) {
  if (!listing) {
    return (
      <React.Fragment>
        <div>
          <div><h3>No product found!</h3></div>
        </div>
      </React.Fragment>
    )
  }

  const { id, image, title, address, description, price } = listing
  const cardClasses = classnames('card', styles.card)

  return (
    <div className={cardClasses} key={id}>
      <div>
        <div className="card-image">
          <img className="img-responsive" src={`${image}`} alt={address} />
        </div>
        <div className="card-header">
          <div className="card-title h5">{title}</div>
          <div className="card-title h6">
            $
            {asCurrency(price.value)}
          </div>
          <div className="card-subtitle text-gray">{address}</div>
        </div>
        <div className="card-body">{description}</div>
        <div className="card-footer">
          <Link className="btn btn-primary" to={`/details/${id}`}>
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Listing
