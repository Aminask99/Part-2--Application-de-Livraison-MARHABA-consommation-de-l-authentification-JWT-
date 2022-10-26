import React, { Component } from 'react'
import  {Link} from 'react-router-dom'

 class Header extends Component {
  render() {
    return (
      <div>

            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                
                <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
                
                
                <h1>Yummy<span>.</span></h1>
                </a>
                
                <nav id="navbar" className="navbar">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Menu</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="#">Chefs</Link></li>
                    <li><Link to="#">Gallery</Link></li>
                    <li className=""><Link to="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                  
                    </li>
                    <li><Link to="#contact">Contact</Link></li>
                </ul>
                </nav>
                
                <Link className="btn-book-a-table" to="#book-a-table">Book a Table</Link>
                <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                
                </div>
                </header>


      </div>
    )
  }
}
export default Header