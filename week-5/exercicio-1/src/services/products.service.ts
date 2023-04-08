import { Product } from "../models/product.model";
import ProductRepositories from "../repositories/product.repositories";

class ProductServices {
  getAll() {
    const products = ProductRepositories.getAll();

    if (!products) {
      throw new Error("Não há produtos cadastrados");
    }

    return products;
  }

  getById(id: string) {
    const product = ProductRepositories.getById(id);

    if (!product) {
      throw new Error("Produto não encontrado!");
    }

    return product;
  }

  create(product: typeof Product) {
    return ProductRepositories.create(product);
  }

  update(id: string, product: Partial<typeof Product>) {
    const ProductExists = ProductRepositories.getById(id);

    // validation
    if (!ProductExists) {
      throw new Error("Produto não encontado");
    }

    return ProductRepositories.update(id, product);
  }

  async remove(id: string) {
    const productByIdExists = await ProductRepositories.getById(id);

    if (!productByIdExists) {
      throw new Error("Produto não encontrado!");
    }

    return ProductRepositories.remove(id);
  }
}

export default new ProductServices();
