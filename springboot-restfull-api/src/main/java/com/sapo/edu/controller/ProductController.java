package com.sapo.edu.controller;
import com.sapo.edu.entity.Product;
import com.sapo.edu.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = {"/admin/product"})
public class ProductController {
    @Autowired
    ProductService productService;

    private final int  SIZE_RECORD = 2;

    @RequestMapping
    public List<Product> getAllProduct(@RequestParam(name = "page", defaultValue = "0") int page) {
        return productService.findAllProduct(page, SIZE_RECORD);
    }

    @GetMapping(value = {"/{id}"})
    public ResponseEntity<?> findCategoryById(@PathVariable("id") int idProduct) {
        Optional<Product> product = productService.findProductById(idProduct);
        return product.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        productService.saveProduct(product);
        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }

    @PutMapping(value = {"/{id}"})
    public ResponseEntity<Product> updateCategory(@PathVariable("id") int idProduct,@RequestBody Product product) {
        boolean isEmpty = productService.findProductById(idProduct).isPresent();
        if(isEmpty) {
            product.setId(idProduct);
            productService.saveProduct(product);
            return new ResponseEntity<Product>(product, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
