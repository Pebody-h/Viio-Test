import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './shared/components/Header/Header'
import { Home } from './features/Home/Home'
import { Products } from './features/Products/Products'
import { Login } from './features/Login/Login'
import { Register } from './features/Register/Register'
import { Footer } from './shared/components/Footer/Footer'

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
