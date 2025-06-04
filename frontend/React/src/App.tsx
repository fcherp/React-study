import React, {useEffect, useRef, useState, memo, useMemo, useCallback, useReducer} from 'react'

import './App.css'
import List from "./components/List.tsx";

import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Form from "./components/Form.tsx";

function App() {

   const [cities, setCities] = useState([]);

    useEffect(()=>{
        (async ()=> {
            try{
                const resp = await fetch("http://localhost:8080/adminview");
                const newData=await resp.json();
                setCities(newData);
            } catch (error){
                console.log(error)
            }
        }
    )();},[]);


  return (
        <Router>
            <Routes>
                <Route path={"/list"} element={<List cities={cities} setCities={setCities}/>}/>
                <Route path={"/edit/:cityid"} element={<Form EditForm={true} cities={cities} setCities={setCities}></Form>}/>
                <Route path={"/new"} element={<Form EditForm={false} cities={cities} setCities={setCities}></Form>}/>
                <Route path={"/"} element={<List cities={cities} setCities={setCities}/>}/>
            </Routes>
        </Router>
  )
}

export default App
