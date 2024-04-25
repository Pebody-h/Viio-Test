import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { CardProduct } from './CardProduct'
import { ProductsServices } from './ProductsServices'
import { useProductsStore } from '../../shared/store/productsStore'

import './products.scss'

export const Products = () => {
  const user = JSON.parse(window.localStorage.getItem('loggedUser'))
  const {updateProducts, products  } = useProductsStore((state) => state);

  const getProducts = async  () => {
    if(user) {
      const resProducts = await ProductsServices(user.token)
      console.log(resProducts)
      updateProducts(resProducts)
      setState(resProducts)
    }
  }

  useEffect(() => {
    getProducts()
  },[])

  return (
    <>
      {
        user ?
          <section className='products_items'>
            {
              products && products.map((p) => 
                <CardProduct 
                  thumbnail= {p.thumbnail}
                  title= {p.title}
                  price= {p.price}
                  quantity= {p.quantity}
                  total= {p.total}
                  discountedPrice= {p.discountedPrice}
                />
              )
            }
          </section>
        :
          <Navigate to='/login'/>
      }
    </>
  )
}
