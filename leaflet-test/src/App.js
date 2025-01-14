import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const map = useMap();

  useEffect(() => {
    if (map) {
      console.log("Map instance (via useMap hook):", map);
      map.whenReady(() => {
        console.log("Map is ready (via useMap hook)!");
      });
    }
  }, [map]);

  return null;
};

const App = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[42.3601, -71.0589]}
        zoom={13}
        style={{ height: "100%", width: "100%", border: "2px solid red" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <MapComponent />
      </MapContainer>
    </div>
  );
};

export default App;

