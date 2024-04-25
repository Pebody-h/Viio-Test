import React from 'react'
import axios from 'axios'

export const RegisterServices = async (dataUser) => {
  const { data } = await axios.post('/register', dataUser)
  return data
}