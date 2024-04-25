import React from 'react'
import axios from 'axios'

export const ProductsServices = async (token) => {
  const { data } = await axios.get('/products', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return data
}