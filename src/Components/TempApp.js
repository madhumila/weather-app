import React, { useEffect, useState } from "react";
import "./TempApp.css";

function TempApp() {
    const[city,setCity]=useState("null");
    const[search,setSearch]=useState("Mumbai");
    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8ebc4013a8c2f88c1ff7e909abbab931`
            const response=await fetch(url);
            // console.log(response);
            const resJson= await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    },[search])
  const handleChange = (e) => {
   setSearch(e.target.value);
  };
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input type="search" className="field" onChange={handleChange} />
        </div>
        {!city?(<p>No data found</p>):(  
        <div className="info">
        <h2 className="location">{search}</h2>
        <h1 className="temp">{city.temp}°C</h1>
        <h3>Min {city.temp_min}°C/Max {city.temp_max}°C </h3>
      </div>)
        }
    
      </div>
    </>
  );
}

export default TempApp;
