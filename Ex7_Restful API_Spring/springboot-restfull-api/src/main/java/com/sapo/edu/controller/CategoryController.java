package com.sapo.edu.controller;

import com.sapo.edu.entity.Category;
import com.sapo.edu.exception.NotFoundException;
import com.sapo.edu.service.CategoryService;
import com.sapo.edu.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import java.sql.Timestamp;
import java.util.List;


@Validated
@CrossOrigin(origins = { "http://localhost:3000/" })
@RestController
@RequestMapping(value = {"/admin/category"})
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @Autowired
    ProductService productService;

    //private final int SIZE_RECORD = 2;

    @GetMapping
    public List<Category> getCategoryList(@RequestParam(name = "page", defaultValue = "0") @Min(0) int page, @RequestParam(value = "limit", defaultValue = "5") int limit) {
        System.out.println("GET MAPPING");
        return categoryService.findAllCategory(page, limit);
    }

    @GetMapping(value = "/count/{limit}")
    public int countPage(@PathVariable("limit") int limit) {
        return categoryService.countPage(limit);
    }

    @GetMapping(value = {"/{id}"})
    public Category findCategoryById(@PathVariable("id") int id) {
        return categoryService.findCategoryById(id).orElseThrow(() -> new NotFoundException("Category"));
    }

    @PostMapping
    public Category addCategory(@Valid @RequestBody Category category) {
        category.setCreateAt(new Timestamp(System.currentTimeMillis()));
        return categoryService.saveCategory(category);
    }

    @PutMapping(value = {"/{id}"})
    public Category updateCategory(@PathVariable("id") int idCategory, @Valid @RequestBody Category category) {
        System.out.println("put mapping");
        if (categoryService.findCategoryById(idCategory).isPresent()) {
            category.setModifiedAt(new Timestamp(System.currentTimeMillis()));
            return categoryService.saveCategory(category);
        } else {
            throw new NotFoundException("Id category");
        }
    }

    @DeleteMapping(value = {"/{id}"})
    @Transactional
    public void deleteCategory(@PathVariable("id") int idCategory){
        if(categoryService.findCategoryById(idCategory).isPresent()) {
            productService.deleteProductByCategoryId(idCategory);
            categoryService.deleteCategoryById(idCategory);
        }else {
            throw new NotFoundException("Id category");
        }
    }
}