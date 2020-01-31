package com.sapo.edu.repository;

import com.sapo.edu.entity.Role;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.JpaRepository;

@Configuration
public interface RoleRepository extends JpaRepository<Role, Integer> {
    Role findByName(String name);
}
