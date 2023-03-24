import express from 'express'
import { Request, Response, Router } from 'express'
import cors from 'cors'

const app = express()

app.use(cors)
app.use(express.json())

const router = Router()

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({message: "Hello World"})
})

app.use(router)

const port = 3000

app.listen(port, () => {
    console.log(`Server running, port: ${port}`)
})