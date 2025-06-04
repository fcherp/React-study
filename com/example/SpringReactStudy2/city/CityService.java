package com.example.SpringReactStudy2.city;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CityService {
    private final CityRepository cityRepository;
    private final CityMapper cityMapper;
    public CityService(CityRepository cityRepository, CityMapper cityMapper){
        this.cityMapper=cityMapper;
        this.cityRepository=cityRepository;
    }
    public CityResponseDto saveCity(CityDto cityDto){
        var city = cityMapper.toCity(cityDto);
        var savedCity = cityRepository.save(city);
        return cityMapper.toCityResponseDto(savedCity);
    }
    public List<CityResponseDto> findAllCities(){
        return this.cityRepository.findAll()
                .stream()
                .map(cityMapper::toCityResponseDto)
                .collect(Collectors.toList());
    }
    public List<City> adminFindAllCities(){
        return new ArrayList<>(this.cityRepository.findAll());
    }
    public CityResponseDto findCityById(Integer id){
        return cityRepository.findById(id).map(cityMapper::toCityResponseDto)
                .orElse(null);
    }

    public void deleteCity(Integer id){
       cityRepository.deleteById(id);
    }

    public CityResponseDto updateCity(Integer id, CityDto cityDto){
        var city = cityMapper.toCity(cityDto);
        city.setId(id);
        cityRepository.save(city);
        return cityMapper.toCityResponseDto(city);
    }
}
