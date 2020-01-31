package com.sapo.edu.service.impl;

import com.sapo.edu.repository.ProductRepository;
import com.sapo.edu.entity.Product;
import com.sapo.edu.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductRepository productRepository;

    @Override
    public List<Product> findAllProduct(int page, int limit) {
        return productRepository.findAll(PageRequest.of(page, limit)).getContent();
    }

    @Override
    public Optional<Product> findProductById(int id) {
        return productRepository.findById(id);
    }

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }

    @Override
    @Transactional
    public void deleteProductByCategoryId(int idCategory) {
        productRepository.deleteProductByCategoryId(idCategory);
    }

    @Override
    public List<Product> findProductByName( int limit, int page, String name) {
        int offset = limit * (page -1);
        return productRepository.findByName(limit, offset, name);
    }


}
