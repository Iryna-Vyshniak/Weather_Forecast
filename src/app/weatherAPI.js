export function getWeatherByCoords(lat, lon) {
  const WEATHER_KEY = '1a7262597e69ba4722faa59c5d71518c';
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`;

  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    console.log(response);
    return response.json();
  });
}

export function getWeatherByQuery(city) {
  const WEATHER_KEY = '1a7262597e69ba4722faa59c5d71518c';
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`;

  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    console.log(response);
    return response.json();
  });
}
