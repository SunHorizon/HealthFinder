import { Map as GoogleMap, Marker} from '@vis.gl/react-google-maps';
import { Circle } from './Circle';
import { useEffect, useState, useRef } from 'react';
import { useMapsLibrary, useMap } from '@vis.gl/react-google-maps';
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

function Maps({Place, radius}) {

    const [healthPlaces, setHealthPlaces] = useState([]);

    useEffect(() => {
        if(!Place || !radius) return;

        searchNearby(Place, radius).then(result => {
            console.log(result);
            setHealthPlaces(result);         
        })
    }, [Place, radius])


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
                            lng: Number(place.Eg.location.lng) ,
                        }}
                        icon={{
                            url: icon,
                            scaledSize: new window.google.maps.Size(40, 40) // scale marker size
                        }}        
                        title={place.Eg.displayName?.text || ''}   
                    />
                )

            })}


        </GoogleMap> 
    );
}


export default Maps


