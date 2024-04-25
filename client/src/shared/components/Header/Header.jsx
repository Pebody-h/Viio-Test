import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonTheme } from './ButtonTheme'
import Logo from '../../../assets/viio.svg'
import { IconMenu2 } from '@tabler/icons-react';
import { IconX } from '@tabler/icons-react';
import { useUserStore } from '../../store/userStore';

import './header.scss'

export const Header = () => {
  const [responsiveMenu, setResponsiveMenu] = useState(false)
  const useLocaleStorage = JSON.parse(window.localStorage.getItem('loggedUser'))
  const {user, deleteUser} = useUserStore((state) => state);
  const [menu, setMenu] = useState(false)

  const logout = () => {
    window.localStorage.removeItem('loggedUser')
    setMenu(false)
    deleteUser()
  }

  const handleMenu = () => {
    setResponsiveMenu(!responsiveMenu)
  }

  useEffect(() => {
    if(user) {
      setMenu(true)
    } else {
      setMenu(false)
    }
  },[user, menu, useLocaleStorage])

  return (
    <header className='header_items'>
      <Link to="/" className='logo_container'>
        <img src={Logo} alt="Logo" className='logo'/>
      </Link>
      <div className='container_menu'>
        <div className='responsive_container' onClick={handleMenu}>
          {
            responsiveMenu
            ? <IconX stroke={2} className='responsive_icon'/>
            : <IconMenu2 stroke={2} className='responsive_icon'/>
          }
        </div>
        <nav className={responsiveMenu ? 'nav_container active' : 'nav_container'}>
          <ul className='nav_menu'>
            <li>
              <Link to="/products" className='nav_link'>
                Productos
              </Link>
            </li>
            {
              Object.keys(user).length == 0  ?
                <>
                  <li>
                    <Link to="/login" className='nav_link'>
                      Inicia sesión
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className='nav_link'>
                      Regístrate
                    </Link>
                  </li>
                </>
              :
                <li onClick={logout}>
                  <Link to="/" className='nav_link'>
                    Cerrar Sesión
                  </Link>
                </li>
            }
          </ul>
        </nav>
        <ButtonTheme/>
      </div>
    </header>
  )
}
