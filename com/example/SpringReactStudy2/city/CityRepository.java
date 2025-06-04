package com.example.SpringReactStudy2.city;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CityRepository extends JpaRepository<City,Integer> {
    List<City> findAllByCityNameContaining(String b);
}
