import * as React from 'react'
import './style.css';
import Hero from '../../components/hero'

import {
  ProductListingsProvider,
  ProductListingsConsumer
} from '../../context/ProductListingsProvider'

import BaseLayout from '../../components/baseLayout'
import Listing from '../../components/listing'
import Filter from '../../components/filter'

function Home(miniHero = false) {
  return (
    <BaseLayout>
      <div className="container">
        <ProductListingsProvider>
          <ProductListingsConsumer>
            {({ productListings, allListings, updateFilter }) => (
              <>
                <Filter
                  updateFilter={updateFilter}
                  count={productListings.length}
                  postcodes={allListings
                    .map(listing => listing.postcode.split(' ')[0])
                    .filter((item, i, arr) => arr.indexOf(item) === i)}
                />
                <Hero miniHero={miniHero} />
                <div className="flex-list prod-container  ">
                  {productListings.map(listing  => (
                    <Listing listing={listing} />
                  ))}
                  {productListings.length < 1 ? <React.Fragment><div className="no-product"><h3>No Exact Matches Found</h3>Save this search to receive email alerts and notifications when new items are available.</div></React.Fragment> : null }
                </div>
              </>
            )}
          </ProductListingsConsumer>
        </ProductListingsProvider>
      </div>
    </BaseLayout>
  
  )
}

export default Home
