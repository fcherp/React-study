import {useEffect, useState} from "react";



import {City} from "./City.tsx";

export default function List({cities,setCities}){

    const [cityName, setName] = useState('');
    const [population, setPopulation] = useState('');
    const [country, setCountry] = useState('');
    const [id, getId] = useState('');
    const city={id,cityName,population,country};


    const deleteCity = (id) => {
        console.log("id - ",id);
            (async ()=> {
                try {
                    await fetch("http://localhost:8080/delete/"+id, {
                        method: 'DELETE',
                        headers: {"Content-Type": "application/json"}
                    })
                        const resp = await fetch("http://localhost:8080/adminview");
                        const newData=await resp.json();
                        setCities(newData);
                    } catch (error){
                        console.log(error)
                    }
                }
            )();
            console.log('deleete');
            return response.json();
    };

     const Cities = cities.map(city=>(
       <City
           key={city.id}
           city={city}
           deleteCity={deleteCity}
       />));

    return(
        <>

        <div className="background"></div>
    <nav className="navbar">
        <div className="title">
            <a className="navbar-brand">City database test</a>
        </div>

        <div className="navbar-link">
            <ul className="nav-ul">
                <li><a href="/#/list"
                       className="nav-link"><p className="link-text">List of cities</p></a>
                    <a className="navbar-brand">Logged in as: {userName}</a>
                </li>
            </ul>
        </div>
    </nav>

    <div className="button-row">
        <a href={`/#/new`} className="btn" id="add">Add
            a new city</a>
    </div>
    <div className="row">
        <div className="container">
            <div className="card">
                <h3 className="text-center">List of Cities</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Population</th>
                        <th>Country</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Cities}
                    </tbody>
                </table>

            </div>
        </div>
    </div>
        </>
    )
}