package com.sapo.edu.service;

import com.sapo.edu.entity.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    public List<Category> findAllCategory(int page, int size);

    public Optional<Category> findCategoryById(int id);

    public Category saveCategory(Category category);

    public void deleteCategoryById(int id);
}
