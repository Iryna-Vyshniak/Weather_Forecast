export function getPlaceInfo(lat, lon) {
  const API_KEY = 'c5ba5d2bfa9542e7b216571e7a9c2684';
  const URL = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${API_KEY}`;

  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
