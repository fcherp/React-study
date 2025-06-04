import React, {useState} from 'react';

import {useParams} from "react-router-dom";


export function SaveForm({EditForm, cities, setCities}) {


    const params = useParams<{cityid:string}>();
    const id = Number(params.cityid);
    const city = cities.find((item)=>item.id===id);
    const [cityName, setName] = useState(EditForm===true ? city.cityName:'');
    const [population, setPopulation] = useState(EditForm===true ? city.population:'');
    const [country, setCountry] = useState(EditForm===true ? city.country:'');
    const [errors, setErrors] = useState({});
    const [saveAddress] = useState('http://localhost:8080/save');
    const [updateAddress] = useState('http://localhost:8080/update/')
    const handleSubmit =(e)=>{
        e.preventDefault();
        const city = {cityName,population,country};
        console.log(city);
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // Form submission logic
            console.log('Form submitted successfully!');
        } else {
            console.log('Form submission failed due to validation errors.');
        }
            (async ()=> {
                    try {
                        await fetch(EditForm===true ? updateAddress+params.cityid : saveAddress, {
                            method: "POST",
                            headers: {"Content-Type": "application/json"},
                            body: JSON.stringify(city)
                        }).then(() => {
                            console.log("added new city");
                            window.location.replace("/#/list");
                        })
                        const resp = await fetch("http://localhost:8080/adminview");
                        const newData=await resp.json();
                        setCities(newData);
                    } catch (error){
                        console.log(error)
                    }
                }
            )();
    }
        const [formData,] = useState({
        cityName: '',
        population: '',
        country: '',
    });

    const validateForm = (data) => {
        const errors = {};

        if (!data.cityName.trim()) {
            errors.cityName = 'City name is required';
        }
        return errors;
    };
    return (


        <form onSubmit={handleSubmit}>


            <fieldset className="form-group">
                <label>City name:</label>
                <input
                    type="text"
                    value={cityName}
                    className="form-control"
                    name="cityName"
                    onChange={(e)=>setName(e.target.value)}
                    required
                />
            </fieldset>

            <fieldset className="form-group">
                <label>Population:</label>
                <input
                    type="text"
                    value={population}
                    className="form-control"
                    name="population"
                    onChange={(e)=>setPopulation(e.target.value)}
                />
            </fieldset>

            <fieldset className="form-group">
                <label>Country:</label>
                <input
                    type="text"
                    value={country}
                    className="form-control"
                    name="country"
                    onChange={(e)=>setCountry(e.target.value)}
                />
            </fieldset>

            <button className="btn" type="submit">Save</button>
        </form>
    );
};