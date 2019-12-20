package com.sapo.edu.controller;

import com.sapo.edu.entity.Category;
import com.sapo.edu.exeption.ResourceNotFoundException;
import com.sapo.edu.service.CategoryService;
import net.bytebuddy.implementation.bytecode.Throw;
import org.springframework.beans.factory.annotation.Autowired;
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

    private final int  SIZE_RECORD = 2;

    @GetMapping
    public List<Category> getCategoryList(@RequestParam(name = "page", defaultValue = "0") int page) {
        return categoryService.findAllCategory(page, SIZE_RECORD);
    }

    @GetMapping(value = {"/{id}"})
    public ResponseEntity<?> findCategoryById(@PathVariable("id") int id) throws ResourceNotFoundException {
        Optional<Category> category = categoryService.findCategoryById(id);
//        return category.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
        if(category.isPresent()) {
            return new ResponseEntity<Category>(category.get(), HttpStatus.OK);
        }
        else {
//            throw new ResourceNotFoundException("not oke");
            return new ResponseEntity<Category>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping
    public ResponseEntity<Category> addCategory(@RequestBody Category category) {
        categoryService.saveCategory(category);
        return new ResponseEntity<Category>(category, HttpStatus.OK);
    }

    @PutMapping(value = {"/{id}"})
    public ResponseEntity<Category> updateCategory(@PathVariable("id") int idCategory,@RequestBody Category category) {
        boolean isEmpty = categoryService.findCategoryById(idCategory).isPresent();
        if(isEmpty) {
            category.setId(idCategory);
            categoryService.saveCategory(category);
            return new ResponseEntity<Category>(category, HttpStatus.OK);
        }
        return new ResponseEntity<Category>(HttpStatus.NOT_FOUND);
    }
}