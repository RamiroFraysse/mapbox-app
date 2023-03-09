import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MapsApp from "./MapsApp";
import "./styles.css";

/* eslint import/no-webpack-loader-syntax:off */
//@ts-ignore
import mapboxgl from "!mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1IjoicmFtZnJhIiwiYSI6ImNsZWVoN3UwdDBncnYzb21yY2U1c2thOXEifQ.viL5ikXsa_Py5643RMTOfQ";

if (!navigator.geolocation) {
  alert("Tu navegador no tiene opción de Geolocation");
  throw new Error("Tu navegador no tiene opción de Geolocation");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
