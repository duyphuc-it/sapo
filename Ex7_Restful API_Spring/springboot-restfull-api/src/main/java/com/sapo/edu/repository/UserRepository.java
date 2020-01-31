package com.sapo.edu.repository;

import com.sapo.edu.entity.User;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.JpaRepository;

@Configuration
public interface UserRepository extends JpaRepository<User, Integer> {
    public User findByUsername(String username);
}
