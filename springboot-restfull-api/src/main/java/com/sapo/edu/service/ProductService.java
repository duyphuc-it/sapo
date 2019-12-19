package com.sapo.edu.service;

import com.sapo.edu.entity.Category;
import com.sapo.edu.entity.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    public List<Product> findAllProduct();

    public Optional<Product> findProductById(int id);

    public void saveProduct(Product product);

    public void deleteProduct(int id);
}
