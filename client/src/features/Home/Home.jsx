import React from 'react'

import './home.scss'

export const Home = () => {
  return (
    <section className='home_items'>
      <h1 className='home_tittle'>Prueba FullStack Developer VIIO</h1>
      <p className='home_description'>
        En esta prueba se ha realizado la creación de una aplicación web FullStack, configurada para ser probada localmente con Docker a través de un contenedor que desplegará el servicio back-end, front-end y la base de datos. {'\n'}Las tecnologías utilizadas están descritas en el archivo readme del proyecto.
      </p>
    </section>
  )
}
