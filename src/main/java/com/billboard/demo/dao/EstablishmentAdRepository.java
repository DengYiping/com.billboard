package com.billboard.demo.dao;

import com.billboard.demo.model.EstablishmentAd;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface EstablishmentAdRepository extends PagingAndSortingRepository<EstablishmentAd, Long> {
}
