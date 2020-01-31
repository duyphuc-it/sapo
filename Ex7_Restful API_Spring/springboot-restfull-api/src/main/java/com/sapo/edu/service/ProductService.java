package com.sapo.edu.service;

import com.sapo.edu.entity.Category;
import com.sapo.edu.entity.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    public List<Product> findAllProduct(int page, int limit);

    public Optional<Product> findProductById(int id);

    public Product saveProduct(Product product);

    public void deleteProduct(int id);

    public void deleteProductByCategoryId(int idCategory);

    public List<Product> findProductByName( int page, int limit, String name);
}
