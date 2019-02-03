package com.billboard.demo.dao;

import com.billboard.demo.model.AvailablePeriod;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Date;
import java.util.List;

@RepositoryRestResource
public interface AvailablePeriodRepository extends PagingAndSortingRepository<AvailablePeriod, Long> {
    List<AvailablePeriod> findAvailablePeriodByStartDateAfterAndEndDateBefore(Date startDate, Date endDate);
}
