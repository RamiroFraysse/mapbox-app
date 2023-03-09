import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
      alternatives: false,
      geometries: 'geojson',
      overview:'simplified',
      steps:false,
      access_token:"pk.eyJ1IjoicmFtZnJhIiwiYSI6ImNsZWVoN3UwdDBncnYzb21yY2U1c2thOXEifQ.viL5ikXsa_Py5643RMTOfQ"
  }
})

export default directionsApi;

