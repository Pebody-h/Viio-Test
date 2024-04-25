import React, { useState } from 'react';
import { LoginServices } from './LoginServices';
import { useUserStore } from '../../shared/store/userStore';
import { useNavigate } from 'react-router-dom';
import { IconMail } from '@tabler/icons-react';
import { IconPasswordUser } from '@tabler/icons-react';
import { IconArrowBadgeRight } from '@tabler/icons-react';

import './login.scss'

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const updateUser = useUserStore((state) => state.updateUser);

  const navigate = useNavigate()

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const resUser = await LoginServices({
        email,
        password
      })
      window.localStorage.setItem('loggedUser', JSON.stringify(resUser))
      await updateUser(resUser)
      setEmail('')
      setPassword('')
      navigate('/products', {
        replace: true,
        state: {
          logged: true,
          resUser
        }
      })
    } catch (error) {
      setErrorMessage('Correo o Contraseña incorrectos')
    }
  };

  return (
    <section className='login_items'>
      <div className='login_card_container'>
        <div className='title_form_login'>
          <h2>Bienvenido de nuevo</h2>
        </div>
        <form onSubmit={handleLoginSubmit} className='form_login'>
          <span className={errorMessage ? 'form_status' : 'form_status_disable'}>{errorMessage}</span>

          <div className='form_input_container'>
            <label htmlFor="email">Correo Electrónico</label>
            <div className='form_input_content'>
              <IconMail stroke={2} className='icon_form'/>
              <input
                type="text"
                value={email}
                id='email'
                placeholder='Escriba Su Correo Electrónico'
                onBlur={({target}) => {
                  const regex = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$');
                  regex.test(target.value) ? setErrorMessage('') : setErrorMessage('El correo debe ser valido')
                }}
                onChange={({ target }) => setEmail(target.value)} 
              />
            </div>
          </div>

          <div className='form_input_container'>
            <label htmlFor="password">Contraseña</label>
            <div className='form_input_content'>
              <IconPasswordUser stroke={2} className='icon_form'/>
              <input
                type="password"
                value={password}
                id='password'
                placeholder='Escriba Su Contraseña'
                onBlur={({target}) => {
                  target.value ? setErrorMessage('') : setErrorMessage('Debes escribir una contraseña')
                }}
                onChange={({ target }) => setPassword(target.value)} 
              />
            </div>
          </div>
          <div className='button_form_container'>
            {
              errorMessage ?
                <button disabled type='submit' className='button_form'>
                  <span className='button_text'>Login</span>
                  <IconArrowBadgeRight stroke={2} className='icon_form'/>
                </button>
              :
                <button type='submit' className='button_form'>
                  <span className='button_text'>Login</span>
                  <IconArrowBadgeRight stroke={2} className='icon_form'/>
                </button>
            }
          </div>
        </form>
      </div>
    </section>
  );
};