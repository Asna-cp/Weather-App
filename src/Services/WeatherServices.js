const API_KEY = '77c335880a3bdb63b66a4364a84ff5d9';
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams,appid:API_KEY});  

    return fetch(url)
    .then((res) => res.json())
};
const FormatCurrentWeather = (data) => {
const {
    coord: {lat, lon},
    main:{ temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,},
    name,
    dt,
    sys:{  country,
        sunrise,
        sunset,},
    weather,
    wind: {speed}
} = data

const {main: details, icon} = weather[0]

return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};


const getFormattedWeatherData = async (searchParams) => {

    const FormattedCurrentWeather = await getWeatherData
    ('weather',searchParams).then(FormatCurrentWeather)
    return FormattedCurrentWeather
}

export default getFormattedWeatherData;