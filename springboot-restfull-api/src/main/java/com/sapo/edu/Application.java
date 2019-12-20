package com.sapo.edu;

import com.sapo.edu.repository.CategoryRepository;
import com.sapo.edu.repository.ProductRepository;
import com.sapo.edu.entity.Category;
import com.sapo.edu.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application implements CommandLineRunner {

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    ProductRepository productRepository;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        for (Category category : categoryRepository.findAll()) {
            System.out.println(category);
        }

        System.out.println();

        for (Product product : productRepository.findAll()) {
            System.out.println(product);
        }
    }
}
