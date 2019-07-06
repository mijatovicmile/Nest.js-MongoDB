import { Controller, 
         Post, 
         Body, 
         Get, 
         Param, 
         Patch, 
         Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController{

    constructor(private productService: ProductsService) {}

    // Add product to the database
    @Post()
    async addProduct(
        @Body('title') productTitle: string, 
        @Body('description') productDescription: string, 
        @Body('price') productPrice: number
    ) {
        const generatedId = await this.productService.addProduct(
            productTitle, 
            productDescription, 
            productPrice
        );
        return { id: generatedId };
    }

    // Get all products from database
    @Get()
    async getProducts() {
        const products = await this.productService.getProducts();
        return products.map((prod) => ({
            id: prod.id,
            title: prod.title,
            description: prod.description,
            price: prod.price
        }));
    }

    // Get single product from database
    @Get(':id')
    getProduct(@Param('id') prodId: string) {
        return this.productService.getProduct(prodId);
    }

    // Update the product
    @Patch(':id')
    async updateProduct(
        @Param('id') prodId: string,        
        @Body('title') productTitle: string, 
        @Body('description') productDescription: string, 
        @Body('price') productPrice: number
    ) {
        await this.productService.updateProduct(prodId, productTitle, productDescription, productPrice);
        return null;
    }

    // Delete the product
    @Delete(':id')
    async deleteProduct(@Param('id') prodId: string) {
        await this.productService.deleteProduct(prodId);
        return null;
    }
}