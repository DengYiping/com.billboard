package com.billboard.demo.dao;

import com.billboard.demo.model.AdSource;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
interface AdSourceRepository extends PagingAndSortingRepository<AdSource, Long> {
}
