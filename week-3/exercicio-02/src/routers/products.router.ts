import { Request, Response, Router } from "express";

// import "database"
import { products } from "../database/db";

const router = Router();

// get all products
router.get("/", (req: Request, res: Response) => {
  return res.send(products);
});

// get product by id
router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const index = products.findIndex((product) => product.id === Number(id));

  // check if product exists
  if (index === -1) {
    return res.status(404).send("Produto não encontrado");
  }

  res.status(200).json(products[index]);
});

router.post("/", (req: Request, res: Response) => {
  const { description, img, price, quantity } = req.body;

  // validation
  if (!description || !img || !price || !quantity) {
    return res.status(422).json({ message: "Preencha todos os campos" });
  }

  const product = {
    id: products.length + 1,
    description,
    img,
    price,
    quantity,
  };

  products.push(product);

  return res.status(201).json({ message: "Produto criado com sucesso!" });
});

// update product
router.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, img, price, quantity } = req.body;

  // validation
  if (!description || !img || !price || !quantity) {
    return res.status(422).json({ message: "Preencha todos os campos" });
  }

  const index = products.findIndex((product) => product.id === Number(id));
  if (index === -1) {
    return res.status(404).send("Produto não encontrado");
  }

  products[index] = {
    ...products[index],
    description,
    img,
    price,
    quantity,
  };

  return res.status(200).json({ message: "Produto atualizado com sucesso!" });
});

// delete product
router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const index = products.findIndex((product) => product.id === Number(id));
  if (index === -1) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }

  products.splice(index, 1);
  res.status(200).json({ message: "Produto removido com sucesso!" });
});

export default router;
