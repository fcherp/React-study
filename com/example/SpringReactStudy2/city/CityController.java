package com.example.SpringReactStudy2.city;


import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin
public class CityController {
    private final CityService cityService;
    public CityController(CityService cityService){
        this.cityService=cityService;
    }
    @PostMapping("/save")
    public CityResponseDto saveCity(
            @Valid @RequestBody CityDto dto
    ){
        return this.cityService.saveCity(dto);
    }
    @PostMapping("/update/{city-id}") public CityResponseDto updateCity(
            @PathVariable("city-id") Integer id,
            @Valid @RequestBody CityDto dto
    ){
        return this.cityService.updateCity(id, dto);
    }
    @GetMapping("/new")
    public void ShowNewForm(){
    }
    @GetMapping("/cities")
    public List<CityResponseDto> findAllCities(){
        return this.cityService.findAllCities();
    }

    @GetMapping("/adminview")
    public List<City> adminFindAllCities(){ return this.cityService.adminFindAllCities();}

    @GetMapping("cities/{city-id}")
    public CityResponseDto findCityById(
        @PathVariable("city-id") Integer id){
        return this.cityService.findCityById(id);
    }
    @DeleteMapping("delete/{city-id}")
    public void deleteCity(
            @PathVariable("city-id") String id){
        int idInt = Integer.parseInt(id);
        this.cityService.deleteCity(idInt);
    }

    @ExceptionHandler({MethodArgumentNotValidException.class})
    public ResponseEntity<?> handleMethodArgumentNotValidException(
            MethodArgumentNotValidException exp
    ){
        var errors = new HashMap<String, String>();
        exp.getBindingResult().getAllErrors()
                .forEach(error ->{
                    var fieldName = ((FieldError)error).getField();
                    var errorMessage = error.getDefaultMessage();
                    errors.put(fieldName,errorMessage);
                });
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }
}
