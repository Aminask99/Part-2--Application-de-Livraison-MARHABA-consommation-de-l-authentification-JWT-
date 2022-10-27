import React, { Component } from 'react'
import  {Link} from 'react-router-dom'
// const {name} = this.props


 class Header extends Component {
  render() {
    return (
      <div>

            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                
                <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
                
                
                <h1> Welcom to  {}<span>.</span></h1>
                </a>
                
                <nav id="navbar" className="navbar">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                   
                    <li><Link to="#contact">Contact</Link></li>
                </ul>
                </nav>
              <div>
                <Link className="btn-book-a-table" to="/login">Login</Link> 
                <Link className="btn-book-a-table" to="/register">Register</Link> 
              </div>             
                <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                
                </div>
            
                </header>


      </div>
    )
  }
}
export default Header