package com.example.SpringReactStudy2.city;
import jakarta.validation.constraints.NotEmpty;
public record CityDto (
   @NotEmpty
    String cityName,
    @NotEmpty
    int population,
    @NotEmpty
    String country
    ){
}
