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
    addProduct(
        @Body('title') productTitle: string, 
        @Body('description') productDescription: string, 
        @Body('price') productPrice: number
    ) {
        const generatedId = this.productService.addProduct(productTitle, productDescription, productPrice);
        return { id: generatedId };
    }

    // Get all products from database
    @Get()
    getProducts() {
        return this.productService.getProducts();
    }

    // Get single product from database
    @Get(':id')
    getProduct(@Param('id') prodId: string) {
        return this.productService.getProduct(prodId);
    }

    // Update the product
    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,        
        @Body('title') productTitle: string, 
        @Body('description') productDescription: string, 
        @Body('price') productPrice: number
    ) {
        this.productService.updateProduct(prodId, productTitle, productDescription, productPrice);
        return null;
    }

    // Delete the product
    @Delete(':id')
    deleteProduct(@Param('id') prodId: string) {
        this.productService.deleteProduct(prodId);
        return null;
    }
}