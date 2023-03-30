import { Request, Response, Router } from "express";
import ProductService from "../services/products.service";

const router = Router();

// get all products
router.get("/", (req: Request, res: Response) => {
  const products = ProductService.getAll();
  return res.status(200).json(products);
});

// get product by id
router.get("/:id", (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = ProductService.getById(id);

    return res.status(200).send(product);
  } catch (error: any) {
    return res.status(404).json(error.message);
  }
});

router.post("/", (req: Request, res: Response) => {
  try {
    ProductService.create(req.body);
    
    return res.status(201).json({ message: "Produto criado com sucesso!" });
  } catch (error: any) {
    return res.status(400).json(error.message)
  }
});

// update product
router.put("/:id", (req: Request, res: Response) => {
  try {
    ProductService.update(req.params.id, req.body)
    return res.status(200).json({message: "Produto atualizado com sucesso!"})
  } catch (error: any) {
    return res.status(200).json(error.message)
  }
});

// delete product
router.delete("/:id", (req: Request, res: Response) => {
  try {
    ProductService.delete(req.params.id)

    return res.status(200).json({message: "Produto deletado com sucesso!"})
  } catch (error: any) {
    return res.status(404).json(error.message)
  }
});

export default router;