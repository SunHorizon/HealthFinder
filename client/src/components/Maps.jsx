import { Map as GoogleMap, Marker} from '@vis.gl/react-google-maps';
import { Circle } from './Circle';

function Maps({Place}){

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
                        radius={5000} 
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


