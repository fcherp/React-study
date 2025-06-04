package com.example.SpringReactStudy2.city;

import org.springframework.stereotype.Service;

@Service
public class CityMapper {
   public CityResponseDto toCityResponseDto(City city){
       return new CityResponseDto(city.getCityName(), city.getPopulation(), city.getCountry());
   }
   public City toCity(CityDto cityDto){
     if (cityDto == null){
         throw new NullPointerException("City response is null");
     }
     var city = new City();
     city.setCityName(cityDto.cityName());
     city.setPopulation(cityDto.population());
     city.setCountry(cityDto.country());
     return city;
   }
}
