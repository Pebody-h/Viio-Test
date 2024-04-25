import React, { useCallback } from 'react'

import { IconSun } from '@tabler/icons-react';
import { IconMoon } from '@tabler/icons-react';
import './buttonTheme.scss'

export const ButtonTheme = () => {
  const handleTheme = () => {
    document.querySelector('body')?.classList.toggle('dark')
  }

  return (
    <div className='dark_mode'>
      <label className='dark_mode_label'>
        <input className='dark_mode_input' type='checkbox' onClick={handleTheme}/>
        <IconSun stroke={2} className='sun'/>
        <IconMoon stroke={2} className='moon'/>
        <span className='toggle'></span>
      </label>
    </div>
  )
}
