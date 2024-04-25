import React from 'react'

import './cardProduct.scss'

export const CardProduct = ({thumbnail, title, price, quantity, total, discountedPrice}) => {
  return (
    <div className='card'>
      <img src={thumbnail} alt="Imagen De Producto" className='img_base'/>
      <h3 className='big_text'>{title}</h3>
      <div className='container_content_card'>
        <p className='content_card'>Precio: {price}USD</p>
        <p className='content_card'>Cantidad: {quantity}UND</p>
        <p className='content_card'>Total:{total}USD</p>
        <p className='content_card'>Descuento: {discountedPrice}USD</p>
      </div>
    </div>
  )
}
