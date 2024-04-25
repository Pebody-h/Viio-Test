import React, { useState } from 'react';
import { useUserStore } from '../../shared/store/userStore';
import { useNavigate } from 'react-router-dom';
import { RegisterServices } from './RegisterServices';
import { IconUserCheck } from '@tabler/icons-react';
import { IconUserBolt } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import { IconPasswordUser } from '@tabler/icons-react';
import { IconArrowBadgeRight } from '@tabler/icons-react';

import './register.scss'

export const Register = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const updateUser = useUserStore((state) => state.updateUser);
  const navigate = useNavigate()

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrorMessage('')
      const createUser = await RegisterServices({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      })
      console.log(createUser)
      window.localStorage.setItem('loggedUser', JSON.stringify(createUser))
      await updateUser(createUser)
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      navigate('/products', {
        replace: true,
        state: {
          logged: true,
          createUser
        }
      })
    } catch (error) {
      setErrorMessage('Error. Inténtelo de nuevo')
    }
  };

  return (
    <section className='register_items'>
      <div className='register_card_container'>
        <div className='title_form_register'>
          <h2>Bienvenido Registrate</h2>
        </div>
        <form onSubmit={handleLoginSubmit} className='form_register'>
          <span className={errorMessage ? 'form_status' : 'form_status_disable'}>{errorMessage}</span>

          <div className='form_input_container'>
            <label htmlFor="firstName">Nombre</label>
            <div className='form_input_content'>
              <IconUserCheck stroke={2} className='icon_form'/>
              <input
                type="text"
                value={firstName}
                id='firstName'
                placeholder='Escriba Su Nombre'
                onBlur={({target}) => {
                  target.value ? setErrorMessage('') : setErrorMessage('Debes escribir un nombre')
                }}
                onChange={({ target }) => setFirstName(target.value)} 
              />
            </div>
          </div>

          <div className='form_input_container'>
            <label htmlFor="lastName">Apellido</label>
            <div className='form_input_content'>
              <IconUserBolt stroke={2} className='icon_form'/>
              <input
                type="text"
                value={lastName}
                id='lastName'
                placeholder='Escriba Su Apellido'
                onBlur={({target}) => {
                  target.value ? setErrorMessage('') : setErrorMessage('Debes escribir un Apellido')
                }}
                onChange={({ target }) => setLastName(target.value)} 
              />
            </div>
          </div>

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
