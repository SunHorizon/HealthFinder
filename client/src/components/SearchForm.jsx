
import PlaceAutocomplete from "./PlaceAutocomplete";
import { useState, useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";


function SearchForm({ onPlaceSelect, selectedPlace, radius, setRadius}){

    const map = useMap();

    useEffect(() =>{
        if(!selectedPlace) return;
        if(selectedPlace.geometry?.viewport){
            map.fitBounds(selectedPlace.geometry?.viewport)
        }
    }, [selectedPlace])

    return (
        <div style={{
            width: '320px',
            padding: '30px 20px',
            backgroundColor: '#ffffff',
            borderRight: '1px solid #e0e0e0',
            boxShadow: '2px 0 5px rgba(0, 0, 0, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            }}>
            <h1 style={{ fontSize: '24px', marginBottom: '10px', color: '#333' }}>
                🏥 Find Health Services
            </h1>
            <p style={{fontSize: '14px', color: '#666'}}>
                Search your address below:
            </p>

            <div>
                <PlaceAutocomplete onPlaceSelect={onPlaceSelect} />
            </div>

            <div style={{margin: '20px 0px'}}>
                <label>Search Radius (meters): {radius}</label>
                <input 
                    type="range"
                    min={10000}
                    max={200000}
                    step={500}
                    value={radius}
                    onChange={(e) => {setRadius(Number(e.target.value))}}
                    style={{width: '100%'}}
                />
            </div>
        </div>
    )
}

export default SearchForm;