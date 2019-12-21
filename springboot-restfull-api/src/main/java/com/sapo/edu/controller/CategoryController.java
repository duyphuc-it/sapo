package com.sapo.edu.controller;

import com.sapo.edu.entity.Category;
import com.sapo.edu.exception.NotFoundException;
import com.sapo.edu.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import java.sql.Timestamp;
import java.util.List;


@Validated
@RestController
@RequestMapping(value = {"/admin/category"})
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    private final int SIZE_RECORD = 2;

    @GetMapping
    public List<Category> getCategoryList(@RequestParam(name = "page", defaultValue = "0") int page) {
        return categoryService.findAllCategory(page, SIZE_RECORD);
    }

    @GetMapping(value = {"/{id}"})
    public Category findCategoryById(@PathVariable("id") int id) {
        return categoryService.findCategoryById(id).orElseThrow(() -> new NotFoundException("Category"));
    }

    @PostMapping
    public Category addCategory(@Valid @RequestBody Category category) {
        category.setCreate_at(new Timestamp(System.currentTimeMillis()));
        return categoryService.saveCategory(category);
    }

    @PutMapping(value = {"/{id}"})
    public Category updateCategory(@PathVariable("id") int idCategory, @Valid @RequestBody Category category) {
        if (categoryService.findCategoryById(idCategory).isPresent()) {
            category.setModified_at(new Timestamp(System.currentTimeMillis()));
            return categoryService.saveCategory(category);
        } else {
            throw new NotFoundException("Id category");
        }
    }

    @DeleteMapping(value = {"/{id}"})
    public void deleteCategory(@PathVariable("id") int idCategory){
        if(categoryService.findCategoryById(idCategory).isPresent()) {
            categoryService.deleteCategoryById(idCategory);
        }else {
            throw new NotFoundException("Id category");
        }
    }
}