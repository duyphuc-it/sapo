package com.sapo.edu.controller;
import com.sapo.edu.entity.Product;
import com.sapo.edu.exception.NotFoundException;
import com.sapo.edu.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@Validated
@RestController
@RequestMapping(value = {"/admin/product"})
public class ProductController {
    @Autowired
    ProductService productService;

    private final int  SIZE_RECORD = 2;

    @RequestMapping
    public List<Product> getAllProduct( @RequestParam(name = "page", defaultValue = "0") int page) {
        return productService.findAllProduct(page, SIZE_RECORD);
    }

    @GetMapping(value = {"/{id}"})
    public Product findCategoryById(@PathVariable("id") int idProduct) {
        return productService.findProductById(idProduct).orElseThrow(() -> new NotFoundException("Product"));
    }

    @PostMapping
    public Product addProduct(@Valid @RequestBody Product product) {
        if(productService.findProductById(product.getCategoryId()).isPresent()) {
            return productService.saveProduct(product);
        }else {
            throw new NotFoundException("Id category");
        }
    }

    @PutMapping(value = {"/{id}"})
    public Product updateCategory(@PathVariable("id") int idProduct, @Valid @RequestBody Product product) {
        product.setId(idProduct);
        return productService.saveProduct(product);
    }

    @DeleteMapping(value = {"/{id}"})
    public void deleteCategory(@PathVariable("id") int idCategory) {
        if(productService.findProductById(idCategory).isPresent()) {
            productService.deleteProduct(idCategory);
        }else {
            throw new NotFoundException("Id product");
        }
    }
}
