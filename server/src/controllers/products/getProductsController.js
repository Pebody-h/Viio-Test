import axios from "axios";

export const getProductsController = async () => {
  try {
    const responseProducts = await axios.get('https://dummyjson.com/carts')
    if(responseProducts) {
      const productsAxios = responseProducts.data.carts
      let resultProducts = []
      for (let i = 0; i < productsAxios.length; i++) {
        const arrayLevel = productsAxios[i]
        for (let a = 0; a < arrayLevel.products.length; a++) {
          resultProducts.push(arrayLevel.products[a])
        }
      }
      return resultProducts
    } else {
      throw new Error(`Error: no se encontradron productos`)
    }
  } catch (error) {
    return 'Ocurrio un error al obtener los productos'
  }
}