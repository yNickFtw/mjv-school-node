import { Request, Response, Router } from "express";
import ProductService from "../services/products.service";
import mongoose from "mongoose";

const router = Router();

// get all products
router.get("/", async (req: Request, res: Response) => {
  try {
    const products = await ProductService.getAll();
    return res.status(200).json(products);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

// get product by id
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await ProductService.getById(id.toString());

    return res.status(200).json(product);
  } catch (error: any) {
    return res.status(404).json(error.message);
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    if (
      !req.body.description ||
      !req.body.img ||
      !req.body.price ||
      !req.body.quantity
    ) {
      return res.status(400).json({ message: "Preencha todos os campos!" });
    }

    await ProductService.create(req.body);

    return res.status(201).json({ message: "Produto criado com sucesso!" });
  } catch (error: any) {
    return res.status(400).json(error.message);
  }
});

// update product
router.put("/:id", async (req: Request, res: Response) => {
  try {
    await ProductService.update(req.params.id, req.body);

    return res.status(200).json({ message: "Produto atualizado com sucesso!" });
  } catch (error: any) {
    return res.status(200).json(error.message);
  }
});

// delete product
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await ProductService.remove(id.toString());

    return res.status(200).json({ message: "Produto deletado com sucesso!" });
  } catch (error: any) {
    return res.status(404).json(error.message);
  }
});

export default router;
