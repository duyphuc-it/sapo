package com.sapo.edu.repository;

import com.sapo.edu.entity.Product;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    public void deleteProductByCategoryId(int idCategory);

    @Query(value = "select * from Product where  Product.name LIKE CONCAT('%',:name,'%') limit :limit offset :offset", nativeQuery = true)
    public List<Product> findByName(@Param("limit") int limit,@Param("offset") int offset,@Param("name") String name);
}
