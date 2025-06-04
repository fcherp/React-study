package com.example.SpringReactStudy2.city;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;

@Entity
@Table(name="cities")
public class City {
    @Id
    @GeneratedValue
    protected int id;
    @Column(name = "cityname")
    @NotEmpty
    protected String cityName;
    @Column
    @NotEmpty
    protected int population;
    @Column
    protected String country;
    public City() {
    }

    public City(int id, String cityName, int population, String country) {
        this.id = id;
        this.cityName = cityName;
        this.population = population;
        this.country = country;
    }


    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public int getPopulation() {
        return population;
    }

    public void setPopulation(int population) {
        this.population = population;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}
