import { Router } from "express";
import healthRouter from './health.router'
import productsRouter from './products.router'

const router = Router()

router.use('/health', healthRouter)
router.use('/products', productsRouter)

export default router