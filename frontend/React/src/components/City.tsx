import React, {useCallback, useReducer, useState} from "react";
export function City({city, deleteCity})
{




    const editCity=(id)=>{
        window.location.replace("/#/edit/"+id);
    }
    return(
        <tr key={city.id}>
            <th>{city.id}</th>
            <th>{city.cityName}</th>
            <th>{city.population}</th>
            <th>{city.country}</th>
            <td>
                <button className={"textButton"} onClick={()=>{editCity(city.id)}}><p className="link-text">Edit</p></button>
                <button className="textButton" onClick={()=>{deleteCity(city.id);}}><p className="link-text" id="delete">Delete</p></button>
            </td>

            </tr>
    )
}