import { config } from "../config/env.js";

export async function getWeatherInfo(city) {
    const WEATHER_API_KEY = config.WEATHER_API_KEY;

    const url = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`;
    const res = await fetch(url);
    const data = await res.json();

    return {
        name: data.location.name,
        region: data.location.region,
        country: data.location.country,
        temp_c: data.current.temp_c,
        temp_f: data.current.temp_f,
        condition: data.current.condition.text,
    };
}
