package com.sapo.edu.service.impl;

import com.sapo.edu.dao.ProductRepository;
import com.sapo.edu.entity.Product;
import com.sapo.edu.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductRepository productRepository;

    @Override
    public List<Product> findAllProduct() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> findProductById(int id) {
        return productRepository.findById(id);
    }

    @Override
    public void saveProduct(Product product) {

    }

    @Override
    public void deleteProduct(int id) {

    }
}
