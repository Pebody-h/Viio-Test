import React from 'react'
import { Link } from 'react-router-dom'

import './footer.scss'

export const Footer = () => {
  return (
    <footer className='footer_items'>
      <nav className='footer_nav_container'>
        <ul className='footer_nav_menu'>
          <li>
            <Link to="/products" className='footer_nav_link'>
              Productos
            </Link>
          </li>
          <li>
            <Link to="/login" className='footer_nav_link'>
              Inicia sesión
            </Link>
          </li>
          <li>
            <Link to="/register" className='footer_nav_link'>
              Regístrate
            </Link>
          </li>
        </ul>
      </nav>
      <p className='footer_copyright'>&copy; 2024 por heider lopez</p>
    </footer>
  )
}
