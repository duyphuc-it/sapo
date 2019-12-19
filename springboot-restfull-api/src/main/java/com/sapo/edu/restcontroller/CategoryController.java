package com.sapo.edu.restcontroller;

import com.sapo.edu.dao.CategoryRepository;
import com.sapo.edu.entity.Category;
import com.sapo.edu.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = {"/admin/category"})
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @GetMapping
    public List<Category> getCategoryList() {
        return categoryService.findAllCategory();
    }

    @GetMapping(value = {"/{id}"})
    public ResponseEntity<?> findCategoryById(@PathVariable("id") int id) {
        Optional<Category> category = categoryService.findCategoryById(id);
//        return category.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
        if(category.isPresent()) {
            return new ResponseEntity<Category>(category.get(), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>( HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Category> addCategory(@RequestBody Category category) {
        categoryService.saveCategory(category);
        return new ResponseEntity<Category>(category, HttpStatus.OK);
    }

    @PutMapping(value = {"/{id}"})
    public ResponseEntity<Category> updateCategory(@PathVariable("id") int idCategory,@RequestBody Category category) {
        Boolean isEmpty = categoryService.findCategoryById(idCategory).isPresent();
        if(isEmpty) {
            category.setId(idCategory);
            categoryService.saveCategory(category);
            return new ResponseEntity<Category>(category, HttpStatus.OK);
        }
        return new ResponseEntity<Category>(HttpStatus.NOT_FOUND);
    }
}