import { Product } from "../models/product.model";
import { products } from "../database/db";

class ProductServices {
  getAll() {
    return products;
  }

  getById(id: string) {
    const index = products.findIndex((product) => product.id === Number(id));

    if (index === -1) {
      throw new Error("Produto não encontrado!");
    }

    return products[index];
  }

  create(data: Product) {
    // validation
    if (!data.description || !data.img || !data.price || !data.quantity) {
      throw new Error("Preencha todos os campos");
    }

    const product = {
      id: products.length + 1,
      description: data.description,
      img: data.img,
      price: data.price,
      quantity: data.quantity,
    };

    products.push(product);
  }

  update(id: string, data: Product) {
    // validation
    if (!data.description || !data.img || !data.price || !data.quantity) {
      throw new Error("Preencha todos os campos");
    }

    // check if product exists
    const index = products.findIndex((product) => product.id === Number(id));
    if (index === -1) {
      throw new Error("Produto não encontrado!");
    }

    products[index] = {
      ...products[index],
      description: data.description,
      img: data.img,
      price: data.price,
      quantity: data.quantity,
    };
  }

  delete(id: string) {
    const index = products.findIndex((product) => product.id === Number(id));
    if (index === -1) {
      throw new Error("Produto não encontrado!");
    }

    products.splice(index, 1);
  }
}

export default new ProductServices();