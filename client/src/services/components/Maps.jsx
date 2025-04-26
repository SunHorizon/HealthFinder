import {APIProvider, Map} from '@vis.gl/react-google-maps';
import './googlemaps.css' 

function Maps(){

    return (
    <div className='centerMap'>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <Map
                style={{width: '50vw', height: '50vh'}}
                defaultCenter={{lat: 22.54992, lng: 0}}
                defaultZoom={3}
                // gestureHandling={'greedy'}
                disableDefaultUI={true}
            />
        </APIProvider>
    </div>
    
    );
}


export default Maps


