import { Router } from 'express'
import user from './users.routes.js'
import products from './products.routes.js'

const router = Router()

router.use('/', user)
router.use('/', products)

export default router