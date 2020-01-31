package com.sapo.edu.controller;
import com.sapo.edu.entity.Product;
import com.sapo.edu.exception.NotFoundException;
import com.sapo.edu.service.CategoryService;
import com.sapo.edu.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import java.util.List;


@Validated
@CrossOrigin(origins = { "http://localhost:3000/" })
@RestController
@RequestMapping(value = {"/admin/product"})
public class ProductController {
    @Autowired
    ProductService productService;

    @Autowired
    CategoryService categoryService;

    //private final int  SIZE_RECORD = 2;

    @GetMapping
    public List<Product> getAllProduct(@RequestParam(name = "name", defaultValue = "") String name, @RequestParam(name = "page", defaultValue = "1") @Min(value = 1) int page, @RequestParam(name = "limit", defaultValue = "1000") @Min(1) int limit ){
        return productService.findProductByName(limit, page, name);
    }

    @GetMapping(value = {"/{id}"})
    public Product findCategoryById(@PathVariable("id") int idProduct) {
        return productService.findProductById(idProduct).orElseThrow(() -> new NotFoundException("Product"));
    }

    @PostMapping
    public Product addProduct(@Valid @RequestBody Product product) {
        if(categoryService.findCategoryById(product.getCategoryId()).isPresent()) {
            return productService.saveProduct(product);
        }else {
            throw new NotFoundException("Id category");
        }
    }

    @PutMapping(value = {"/{id}"})
    public Product updateCategory(@PathVariable("id") int idProduct, @Valid @RequestBody Product product) {
        System.out.println("put mapping");
        product.setId(idProduct);
        return productService.saveProduct(product);
    }

    @CrossOrigin
    @DeleteMapping(value = {"/{id}"})
    public void deleteCategory(@PathVariable("id") int id) {
        if(productService.findProductById(id).isPresent()) {
            productService.deleteProduct(id);
        }else {
            throw new NotFoundException("Id product");
        }
    }
}
