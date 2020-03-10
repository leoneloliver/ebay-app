import * as React from 'react'

const DefaultState = {
  productListings: [],
  filter: {}
}

const ProductListingsContext = React.createContext(DefaultState)

export const ProductListingsConsumer = ProductListingsContext.Consumer

export class ProductListingsProvider extends React.Component {
  static applyFilter(listings, filter) {
    const { priceFrom, postcode, sortOrder, prodTitle } = filter
    let result = listings
    if (priceFrom) {
      const from = priceFrom
      result = result.filter(item => item.price.value >= from)
    }
    if (prodTitle) {
      // console.log('yes')
      result = result.filter(item => item.title.toLowerCase().includes(prodTitle))
    }
    if (postcode) {
      result = result.filter(item => item.postcode.toLowerCase().startsWith(postcode))
    }
    if (sortOrder) {
      if (sortOrder === 'highestfirst') {
        result = result.sort((a, b) => b.price.value - a.price.value)
      }
      if (sortOrder === 'lowestfirst') {
        result = result.sort((a, b) => a.price.value - b.price.value)
      }
    }
    return result
  }

  state = DefaultState

  componentDidMount() {
    fetch('/server/listings.json')
    // fetch('https://api.myjson.com/bins/18vgb2')
      .then(res => res.json())
      .then(res => {
        this.setState({ productListings: res })
      })
  }

  getListingByProductId = productId => {
    const { productListings } = this.state
    return productListings.find(listing => listing.id === Number(productId))
    
  }

  updateFilter = filter => {
    this.setState({
      filter
    })
  }

  render() {
    const { children } = this.props
    const { productListings, filter } = this.state

    const filteredListings = ProductListingsProvider.applyFilter(
      productListings,
      filter
    )

    return (
      <ProductListingsContext.Provider
        value={{
          allListings: productListings,
          productListings: filteredListings,
          updateFilter: this.updateFilter,
          getListingByProductId: this.getListingByProductId
        }}
      >
        {children}
      </ProductListingsContext.Provider>
    )
  }
}
