package com.billboard.demo.dao;

import com.billboard.demo.model.AvailablePeriod;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.Date;

@RepositoryRestResource
public interface AvailablePeriodRepository extends PagingAndSortingRepository<AvailablePeriod, Long> {
    @RestResource
    Page<AvailablePeriod> findAllByStartDateAfterAndEndDateBefore(Date from, Date to, Pageable p);
}
