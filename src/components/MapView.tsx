/* eslint import/no-webpack-loader-syntax:off */
//@ts-ignore
import { Map } from "!mapbox-gl";
import { useContext, useRef, useLayoutEffect } from "react";
import { MapContext, PlacesContext } from "../context";
import Loading from "./Loading";

export function MapView() {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  /**
   * Esperar a que nuestro componente tenga las dimensiones correctas
   */
  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!, // container ID
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });
      setMap(map);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      ref={mapDiv}
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      {userLocation?.join(",")}
    </div>
  );
}

export default MapView;
