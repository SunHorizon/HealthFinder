import { useEffect, useState } from "react";
import { fetchImage } from "./services/api";
import Maps from "./components/Maps";
import SearchForm from "./components/SearchForm";
import { MapControl, ControlPosition } from "@vis.gl/react-google-maps";
import { APIProvider } from "@vis.gl/react-google-maps";

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        {/* Sidebar */}
        <SearchForm/>
        {/* Map */}
        <div style={{ flexGrow: 1 }}>
          <Maps />
        </div>
      </APIProvider>  
    </div>
  );
}

export default App;