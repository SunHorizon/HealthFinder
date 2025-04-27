import { useEffect, useRef, useState } from "react";
import { useMapsLibrary } from '@vis.gl/react-google-maps';

function PlaceAutocomplete({ onPlaceSelect }) {
    const inputRef = useRef(null);
    const [autocomplete, setAutocomplete] = useState(null);
    const placesLib = useMapsLibrary('places');

    const options = { fields: ["geometry", "name", "formatted_address"] };

    useEffect(() => {
        if (!placesLib || !inputRef.current) {
            return;
        }
        console.log("Initializing Autocomplete");
        const newAutocomplete = new window.google.maps.places.Autocomplete(inputRef.current, options);
        setAutocomplete(newAutocomplete);
    }, [placesLib]);

    useEffect(() => {
        if (!autocomplete) return;

        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            // console.log('Selected place:', place);
            if (onPlaceSelect) onPlaceSelect(place);     
        });

        return () => listener.remove(); // Cleanup the listener on unmount
    }, [autocomplete, onPlaceSelect]);

    return (
        <input
            ref={inputRef}
            type="text"
            placeholder="Enter your address..."
            style={{
                width: '90%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '16px',
                outlineColor: '#007bff'
        }}/>
    );
}

export default PlaceAutocomplete;