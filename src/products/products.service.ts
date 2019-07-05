import { Injectable, NotFoundException } from '@nestjs/common';

// Product model
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  // Add new product
  addProduct(title: string, description: string, price: number) {
    const productId = Math.random().toString();
    const newProduct = new Product(productId, title, description, price);

    this.products.push(newProduct);

    return productId;
  }

  // Get all products
  getProducts() {
    return [...this.products];
  }

  // Get single product
  getProduct(productId: string) {
    const product = this.findProduct(productId)[0];
    return { ...product };
  }

  // Update single product
  updateProduct(productId: string, title: string, description: string, price: number) {
    const [product, index] = this.findProduct(productId);
    const updatedProduct = {...product};
    if (title) {
      updatedProduct.title = title; 
    }
    if (description) {
      updatedProduct.description = description; 
    }
    if (price) {
      updatedProduct.price = price; 
    }
    this.products[index] = updatedProduct;
  }

  // Delete the product
  deleteProduct(productId: string) {
    const index = this.findProduct(productId)[1];
    this.products.splice(index, 1);
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];

    // If there is no product
    if (!product) {
        throw new NotFoundException('Could not found product');
    }
    // If product exist, return it  
    return [product, productIndex];
  }
}
