import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Product model
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

  // Add new product
  async addProduct(title: string, description: string, price: number) {
    const newProduct = new this.productModel({title, description, price});

    const result = await newProduct.save();
    return result.id as string;
  }

  // Get all products
  async getProducts() {
    const products = await this.productModel.find().exec();
    return products as Product[];
  }

  // Get single product
  async getProduct(productId: string) {
    const product = await this.findProduct(productId);
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price
    };
  }

  // Update single product
  async updateProduct(productId: string, title: string, description: string, price: number) {
    const updatedProduct = await this.findProduct(productId);

    if (title) {
      updatedProduct.title = title; 
    }
    if (description) {
      updatedProduct.description = description; 
    }
    if (price) {
      updatedProduct.price = price; 
    }
    updatedProduct.save();
  }

  // Delete the product
  async deleteProduct(productId: string) {
    const result = await this.productModel.deleteOne({_id: productId}).exec();
    if (result.n === 0) {
      throw new NotFoundException('Cound not found product');
    }
  }

  private async findProduct(id: string): Promise<Product> {
    let product;
    try {
      product = await this.productModel.findById(id);  
    } catch (error) {
      throw new NotFoundException('Could not found product');
    }

    // If there is no product
    if (!product) {
      throw new NotFoundException('Could not found product');
    }
    // If product exist, return it  
    return product;
  }
}
