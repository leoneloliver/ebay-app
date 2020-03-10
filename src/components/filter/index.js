/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import classnames from 'classnames'
import logo from '../../images/logo.png'

import styles from './styles.module.css'

function getSortOrderValue(sortOrder) {
  return sortOrder.replace(' ', '').toLowerCase()
}

function getPropertiesDisplayText(count) {
  if (count > 1 || count === 0) {
    return 'products'
  }
  return 'product'
}

const DefaultState = {
  prodTitle: '',
  priceFrom: '',
  postcode: '',
  sortOrder: '',
  sortOrders: ['Highest First', 'Lowest First']
}

class Filter extends React.Component {
  state = Object.assign({}, DefaultState)

  handleChange = (prop, value) => {
    this.setState({
      [prop]: value
    })
    // console.log(this.state.prodTitle);
  }

  render() {
    const containerClasses = classnames('prod-container', 'flex', styles.container)
    const formClasses = classnames('form-horizontal', styles.form)
    const { priceFrom, postcode, sortOrder, sortOrders, prodTitle } = this.state
    const { postcodes, count, updateFilter } = this.props

    return (

      <div className="scope">
        <form
          onChange={() => setTimeout(() => updateFilter(this.state), 0)}
          className={formClasses}
          noValidate
        >
        <div className="top">
          <div className={containerClasses}>
            <img className="logo" src={logo} alt="logo" />
            <input
              type="search"
              className="searchbar"
              id="prodTitle"
              placeholder="Search for anything"
              value={prodTitle}
              onChange={event =>
                this.handleChange('prodTitle', event.target.value)
              }
            />
          </div>
        </div> 
        <div className={containerClasses}>
            <div className={containerClasses}>
              <div className="column">
                <div className="flex">
                  <div className="label-filter">
                    <label className="form-label" htmlFor="price-from">
                      Price from
                    </label>
                  </div>
                  <div className="input-filter">
                    <input
                      className="form-input"
                      min="0"
                      max="10000000"
                      type="number"
                      id="price-from"
                      placeholder="$ 100.00"
                      value={priceFrom}
                      onChange={event =>
                        this.handleChange('priceFrom', Number(event.target.value))
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="flex">
                  <div className="label-filter">
                    <label className="form-label" htmlFor="postcode">
                      Postcode
                    </label>
                  </div>
                  <div className="input-filter">
                    <select
                      className="form-select select-css"
                      id="postcode"
                      value={postcode}
                      onChange={event =>
                        this.handleChange('postcode', event.target.value)
                      }
                    >
                      <option value="">Choose...</option>
                      {postcodes.map(pc => (
                        <option value={pc.toLowerCase()}>{pc}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="flex">
                  <div className="label-filter">
                    <label className="form-label" htmlFor="sortorder">
                      Sort Order
                    </label>
                  </div>
                  <div className="input-filter">
                    <select
                      className="form-select select-css"
                      id="sortorder"
                      value={sortOrder}
                      onChange={event =>
                        this.handleChange('sortOrder', event.target.value)
                      }
                    >
                      <option value="">Choose...</option>
                      {sortOrders.map(order => (
                        <option value={getSortOrderValue(order)}>{order}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex">
              <div className="label-filter">
                Refine your results
                
              </div>
              <div className="input-filter">
              <button
                  data-cy="clear-button"
                  className="input-button"
                  type="button"
                  onClick={() => {
                    this.setState(Object.assign({}, DefaultState))
                    updateFilter({})
                  }}
                >
                  Clear
                </button>
              </div>
              </div>
            <div>
              <div data-cy="property-count" className="list-number">
                {`${count} ${getPropertiesDisplayText(count)} on the List`}
              </div>
            </div>
            </div>



          </div>
            
            
        </form>

          
    


        

      </div>
    )
  }
}

export default Filter
