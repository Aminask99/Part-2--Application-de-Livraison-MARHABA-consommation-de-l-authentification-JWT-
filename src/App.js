
import React, { Component } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import{Routes,Route }from 'react-router-dom'

import'./App.css'




 class App extends Component
{
  render()
 {
    return (
    
      <div>
       
        <Header />
        <Header name="Marhaba" />

        
     <Routes>

<Route path='/login'element={<Login />} />
<Route path='/register'element={<Register />} />
<Route path='/home'element={<Home />} />


     </Routes>
        <Footer />
     

      </div>
 
     
    );
}
}
export default App

