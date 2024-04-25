import React from 'react'
import axios from 'axios'

export const LoginServices = async (credentials) => {
  const { data } = await axios.post('/login', credentials)
  return data
}
