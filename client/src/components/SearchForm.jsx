
import PlaceAutocomplete from "./PlaceAutocomplete";
import { useState, useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import '../styles/healthServiceToggle.css';


function SearchForm({ onPlaceSelect, selectedPlace, radius, setRadius, setHealthservicetype, healthServicetype}){

    const map = useMap();
    const healthServiceTypes = [
        "doctor",
        "pharmacy",
        "hospital",
        "drugstore",
        "dentist",
        "physiotherapist",
    ];

    useEffect(() =>{
        if(!selectedPlace) return;
        if(selectedPlace.geometry?.viewport){
            map.fitBounds(selectedPlace.geometry?.viewport)
        }
    }, [selectedPlace])

    function handleHealthServiceToggle(type){
        setHealthservicetype(prev => 
            prev.includes(type) ? prev.filter(t => t != type) : [...prev, type]
        );
    }

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
                    max={50000}
                    step={500}
                    value={radius}
                    onChange={(e) => {setRadius(Number(e.target.value))}}
                    style={{width: '100%'}}
                />
            </div>

            <div className="toggle-container">
                <h3>Filter Health Services</h3>
                <div className="toggle-list">
                    {healthServiceTypes.map(type => (
                        <label key={type} className="toggle-item">
                            <input 
                                type="checkbox"
                                checked={healthServicetype.includes(type)}
                                onClick={() => handleHealthServiceToggle(type) }
                            />
                            <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div id="directions-panel" 
            style={{ width: '100%', height: '100%', overflowY: 'auto', padding: '10px', marginTop: '20px'}}>
            <h3>Directions</h3>
                {/* Directions will auto-populate here */}
            </div>
        </div>
    )
}

export default SearchForm;