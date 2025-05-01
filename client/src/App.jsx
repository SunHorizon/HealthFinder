import { useEffect, useState } from "react";
import { fetchImage } from "./services/api";
import Maps from "./components/Maps";
import SearchForm from "./components/SearchForm";
import { MapControl, ControlPosition } from "@vis.gl/react-google-maps";
import { APIProvider } from "@vis.gl/react-google-maps";

function App() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [radius, setRadius] = useState(5000);

  const [healthServicetype, setHealthservicetype] = useState([
    "doctor",
  ]);

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={['places']}>
        {/* Sidebar */}
        <SearchForm 
          onPlaceSelect={setSelectedPlace} 
          selectedPlace={selectedPlace} 
          radius={radius} 
          setRadius={setRadius}
          setHealthservicetype={setHealthservicetype} 
          healthServicetype={healthServicetype}/>
        {/* Map */}
        <div style={{ flexGrow: 1 }}>
          <Maps Place={selectedPlace} radius={radius} healthServicetype={healthServicetype}/>
        </div>
      </APIProvider>  
    </div>
  );
}

export default App;