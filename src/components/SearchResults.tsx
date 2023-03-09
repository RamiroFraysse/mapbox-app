import { useContext, useState } from "react";
import { MapContext, PlacesContext } from "../context";
import { Feature } from "../interfaces/places";
import { LoadingPlaces } from "./LoadingPlaces";

export const SearchResults = () => {
  const [activeId, setActiveId] = useState("");
  const { places, userLocation, isLoadingPlaces } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);

  const getRoute = (place: Feature) => {
    if (!userLocation) return;
    const [lng, lat] = place.center;
    getRouteBetweenPoints(userLocation, [lng, lat]);
  };

  const onPlaceClicked = (place: Feature) => {
    const [lng, lat] = place.center;
    setActiveId(place.id);
    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
  };
  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }
  if (places.length === 0) {
    return <></>;
  }
  return (
    <ul className="container p-2">
      {places.map((place) => (
        <li
          key={place.id}
          className={`flex flex-col gap-4 pointer ${
            activeId === place.id ? "bg-teal-200" : ""
          }`}
          onClick={() => onPlaceClicked(place)}
        >
          <h6 className="font-bold">{place.text_es}</h6>
          <p>{place.place_name}</p>
          <button
            onClick={() => getRoute(place)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
