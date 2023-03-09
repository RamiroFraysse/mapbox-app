import { MapProvider, PlacesProvider } from "./context";
import Home from "./screens/Home";

function MapsApp() {
  return (
    <PlacesProvider>
      <MapProvider>
        <Home />
      </MapProvider>
    </PlacesProvider>
  );
}

export default MapsApp;
