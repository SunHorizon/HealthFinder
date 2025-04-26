import {APIProvider, Map as GoogleMap, Marker} from '@vis.gl/react-google-maps';


function Maps({center, places}){

    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                defaultCenter={{lat: 22.54992, lng: 0}}
                defaultZoom={3}
                style={{width: '100vw', height: '100vh'}}
                disableDefaultUI={true}
            />
        </APIProvider>  
    );
}


export default Maps


