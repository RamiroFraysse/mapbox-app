import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
      limit: 5,
      language: 'es',
      access_token:"pk.eyJ1IjoicmFtZnJhIiwiYSI6ImNsZWVoN3UwdDBncnYzb21yY2U1c2thOXEifQ.viL5ikXsa_Py5643RMTOfQ"
  }
})

export default searchApi;

