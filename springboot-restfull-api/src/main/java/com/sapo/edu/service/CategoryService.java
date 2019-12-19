package com.sapo.edu.service;

import com.sapo.edu.entity.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    public List<Category> findAllCategory();

    public Optional<Category> findCategoryById(int id);

    public void saveCategory(Category category);

    public void deleteCategory(int id);
}
