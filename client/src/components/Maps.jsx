import { Map as GoogleMap, Marker} from '@vis.gl/react-google-maps';
import { Circle } from './Circle';
import { useEffect } from 'react';
import { useMapsLibrary, useMap } from '@vis.gl/react-google-maps';
import searchNearby from '../services/searchNearby';

function Maps({Place, radius}) {

    // const placesLib = useMapsLibrary('places');
    // const map = useMap();
    
    // useEffect(() => {
    //     if(!Place || !placesLib) return;
    //     const place = new placesLib.PlacesService(map)  

    //     const request = {
    //         // required parameters
    //         fields: ["displayName", "location", "businessStatus"],
    //         locationRestriction: {
    //           center: {lat: Place.geometry.location.lat(), lng: Place.geometry.location.lng()},
    //           radius: radius,
    //         },
    //         // optional parameters
    //         includedPrimaryTypes: ["restaurant"],
    //         maxResultCount: 5,
    //         // rankPreference: SearchNearbyRankPreference.POPULARITY,
    //         language: "en-US",
    //     };
          
    //     // const {places} = place.nearbySearch(request);
    //     console.log(place.nearbySearch(request));
    // }, [Place])


    useEffect(() => {
        if(!Place || !radius) return;

        searchNearby(Place, radius);
    }, [Place])


    return (    
        <GoogleMap
            defaultCenter={{lat: 22.54992, lng: 0}}
            defaultZoom={3}
            style={{width: '100%', height: '100%'}}
            disableDefaultUI={true}
            
        > 
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
        </GoogleMap> 
    );
}


export default Maps


