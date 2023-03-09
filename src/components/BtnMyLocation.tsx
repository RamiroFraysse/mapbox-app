import { useContext } from "react";
import { MapContext, PlacesContext } from "../context";

export function BtnMyLocation() {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);
  const onClick = () => {
    if (!isMapReady) throw new Error("Mapa no está listo");
    if (!userLocation) throw new Error("No hay ubicación de usuario");
    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };
  return (
    <button
      onClick={onClick}
      style={{ position: "fixed", top: "20px", right: "20px", zIndex: 99 }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Mi Ubicación
    </button>
  );
}

export default BtnMyLocation;
