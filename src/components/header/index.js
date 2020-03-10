import * as React from 'react'
import logo from '../../images/logo.png'

function Header() {
  return (
    <div className="scope">
        <div className="top">
          <div className="prod-container flex">
            <img className="logo" src={logo} alt="logo" />
            
          </div>
        </div> 
    </div>
  )
}
export default Header