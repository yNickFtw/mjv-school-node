import { Request, Response, Router } from 'express'

const router = Router()

const students = [
    {
        name: 'Nicolas Freitas',
        email: 'nicolasfreitas@gmail.com',
        document: '14935657022',
        password: '123456',
        age: 17
    },
    {
        name: 'Gabriel Silva',
        email: 'gabrielsilva@gmail.com',
        document: '11339818019',
        password: '1241234',
        age: 24
    },
    {
        name: 'Nathan Carlos',
        email: 'nathancarlos@gmail.com',
        document: '58227527051',
        password: '6543134',
        age: 22
    },
    {
        name: 'Palloma Cristina',
        email: 'pallomacristina@gmail.com',
        document: '59753988001',
        password: '3157514',
        age: 32
    },
    {
        name: 'Maria Souza',
        email: 'mariasouza@gmail.com',
        document: '49434300070',
        password: '0645464',
        age: 27
    },
];

router.get('/', (req: Request, res: Response) => {
    res.send(students)
})

router.get('/:document', (req: Request, res: Response) => {
    const student = students.find((std) =>  std.document === req.params.document)

    if(!student) {
        return res.status(400).json({message: 'Estudando não encontrado!'})
    }

    res.status(200).json(student)

})

router.post('/', (req: Request, res: Response) => {
    if(req.body.age < 18) {
        return res.status(400).json({message: "Estudante não foi criado pois não tem a idade mínima (18 anos)!"})
    }
    students.push(req.body)
    res.status(201).json({message: "Estudante criado com sucesso!"})
})

router.delete('/remove/:document', (req: Request, res: Response) => {
    const studentIndex = students.findIndex((student) => student.document === req.params.document)

    if(studentIndex === -1) {
        return res.status(400).json({message: 'Estudante não encontrado!'})
    }

    students.splice(studentIndex, 1)
    res.status(200).json({message: 'Estudante removido com sucesso!'})

})

router.put('/:document', (req: Request, res: Response) => {
    const studentIndex = students.findIndex((student) => student.document === req.params.document)

    if(studentIndex === -1) {
        return res.status(400).json({message: 'Estudante não encontrado!'})
    }

    students[studentIndex] = req.body;
    res.status(200).json({message: 'Estudante atualizado com sucesso'})
})

export default router;