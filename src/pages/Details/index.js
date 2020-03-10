import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  ProductListingsProvider,
  ProductListingsConsumer
} from '../../context/ProductListingsProvider'
import BaseLayout from '../../components/baseLayout'
import ProductDetails from '../../components/productDetails'
import Header from '../../components/header'
class Details extends Component{
    render(){
      const prodId = this.props.match.params.productId;   
      return(
        <React.Fragment>
          <BaseLayout miniHero>
            <Header />
            <div className="container">
              <ProductListingsProvider>
                <ProductListingsConsumer>
                  {({ getListingByProductId }) => (
                    <ProductDetails listing={getListingByProductId(prodId)} />
                  )}
                </ProductListingsConsumer>
              </ProductListingsProvider>
            </div>
          </BaseLayout>
        </React.Fragment>  
      )
    }
}
export default withRouter(Details);