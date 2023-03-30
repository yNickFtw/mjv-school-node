import { Request, Response, Router } from 'express'
import StudentsService from '../services/students.service'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    const students = StudentsService.getAll()
    res.send(students)
})

router.get('/:document', (req: Request, res: Response) => {
    const student = StudentsService.getByDocument(req.params.document)

    if(!student) {
        return res.status(400).json({message: 'Estudando não encontrado!'})
    }

    res.status(200).json(student)
})

router.post('/', (req: Request, res: Response) => {
    if(req.body.age < 18) {
        return res.status(400).json({message: "Estudante não foi criado pois não tem a idade mínima (18 anos)!"})
    }
    StudentsService.create(req.body)
    res.status(201).json({message: "Estudante criado com sucesso!"})
})

router.delete('/remove/:document', (req: Request, res: Response) => {
    try {
        StudentsService.remove(req.params.document);

        res.status(200).json({message: 'Estudante removido com sucesso!'})
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
})

router.put('/:document', (req: Request, res: Response) => {
    try {
        StudentsService.update(req.params.document, req.body)

        res.status(200).json({message: 'Estudante atualizado com sucesso'})
    } catch (error: any) {
        res.status(400).send(error.message)
    }    
})

export default router;