package com.billboard.demo.dao;

import com.billboard.demo.model.Leaser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface LeaserRepository extends CrudRepository<Leaser, Long> {
}
