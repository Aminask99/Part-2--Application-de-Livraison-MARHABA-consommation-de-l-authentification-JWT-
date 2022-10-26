
import React, { Component } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import{Routes,Route }from 'react-router-dom'

import'./App.css'


 class App extends Component
{
  render()
 {
    return (
    
      <div>
       
        <Header />

        
     <Routes>

<Route path='/login'element={<Login />} />
<Route path='/home'element={<Home />} />


     </Routes>
        <Footer />
     

      </div>
 
     
    );
}
}
export default App

