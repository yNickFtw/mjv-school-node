import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    const healthCheck = { message: "Application running successfully" }
    res.send(healthCheck)
})

router.get('/check', (req: Request, res: Response) => {
    const healthCheck = { message: "Application running successfully" }
    res.send(healthCheck)
})

export default router