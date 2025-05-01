import { Map as GoogleMap, Marker} from '@vis.gl/react-google-maps';
import { Circle } from './Circle';
import { useEffect, useState, useRef } from 'react';
import { useMapsLibrary, useMap, InfoWindow } from '@vis.gl/react-google-maps';
import searchNearby from '../services/searchNearby';
import { identifyPlaceType } from '../services/searchNearby';
import { simplifiedMapStyle } from '../styles/mapstyles';


const markerIcons = {
    doctor: '/icons/doctor.png',
    pharmacy: '/icons/pharmacy.png',
    drugstore: '/icons/pharmacy.png',
    hospital: '/icons/hospital.png',
    dentist: '/icons/dentist.png',
    physiotherapist: '/icons/physiotherapist.png',
    default: '/icons/default.png',
};

function Maps({Place, radius, healthServicetype}) {

    const [healthPlaces, setHealthPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);

    useEffect(() => {
        if(!Place || !radius || !healthServicetype.length) return;

        searchNearby(Place, radius, healthServicetype).then(result => {
            console.log(result);
            setHealthPlaces(result);         
        })
    }, [Place, radius, healthServicetype])


    return (    
        <GoogleMap
            defaultCenter={{lat: 22.54992, lng: 0}}
            defaultZoom={3}
            style={{width: '100%', height: '100%'}}
            options={{
                styles: simplifiedMapStyle,
                disableDefaultUI: true,
            }}
        > 
            {/* Display blue circle and searched location marker */}
            {Place && (
                <>
                    <Circle 
                        center={{lat: Place.geometry.location.lat(), lng: Place.geometry.location.lng()}} 
                        radius={radius} 
                        options={{
                            strokeColor: '#007bff',
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillColor: '#007bff',
                            fillOpacity: 0.15,
                        }}
                    
                    />
                    <Marker position={{lat: Place.geometry.location.lat(), lng: Place.geometry.location.lng()}} />
                </>
            )}  

            {/* Health Services Markers */}
            {healthPlaces && healthPlaces.map((place, index) => {   
                const type = identifyPlaceType(place);
                const icon = markerIcons[type] || markerIcons.default;
                return (
                    <Marker 
                        key={place.Eg.id || index}
                        position={{
                            lat: Number(place.Eg.location.lat),
                            lng: Number(place.Eg.location.lng),
                        }}
                        icon={{
                            url: icon,
                            scaledSize: new window.google.maps.Size(40, 40) // scale marker size
                        }}        
                        title={place.Eg.displayName?.text || ''}   
                        onClick={() => setSelectedPlace(place)}
                    />
                )

            })}

            {/* Information window display health service details*/}
            {selectedPlace && (
                <InfoWindow 
                    position={{
                        lat: selectedPlace.Eg.location.lat,
                        lng: selectedPlace.Eg.location.lng,
                    }}
                    onCloseClick={() => setSelectedPlace(null)}
                >
                    <div>
                        <h3>{selectedPlace.Eg.displayName || 'Unknown Place'}</h3>
                        <p>Address: {selectedPlace.Eg.formattedAddress || 'No address available'}</p>
                        <p>Health Service: {(selectedPlace.Eg.types && selectedPlace.Eg.types.length > 0) ? selectedPlace.Eg.types[0] : 'N/A'}</p>
                        <p>Status: {selectedPlace.Eg.businessStatus || 'N/A'}</p>
                        <p>Website: <a href={selectedPlace.Eg.websiteURI} target="_blank">{selectedPlace.Eg.websiteURI}</a> </p>
                        <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${selectedPlace.Eg.formattedAddress}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-block",
                                marginTop: "8px",
                                padding: "6px 12px",
                                backgroundColor: "#007bff",
                                color: "#fff",
                                borderRadius: "4px",
                                textDecoration: "none",
                                fontSize: "14px",
                            }}
                            >
                            Navigate
                        </a>
                    </div>

                </InfoWindow>
            )}
        </GoogleMap> 
    );
}


export default Maps


