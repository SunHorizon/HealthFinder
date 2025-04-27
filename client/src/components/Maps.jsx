import {Map as GoogleMap, Marker} from '@vis.gl/react-google-maps';


function Maps({center, places}){

    return (    
        <GoogleMap
            defaultCenter={{lat: 22.54992, lng: 0}}
            defaultZoom={3}
            style={{width: '100%', height: '100%'}}
            disableDefaultUI={true}
        />
    );
}


export default Maps


