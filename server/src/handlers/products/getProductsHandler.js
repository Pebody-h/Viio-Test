import { getProductsController } from "../../controllers/products/getProductsController.js"

export const getProductsHandler = async (req, res) => {
  try {
    const products = await getProductsController()
    if(!products) return res.status(400).json({error: 'productos no encontrados'})
    return res.status(200).json(products)
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}