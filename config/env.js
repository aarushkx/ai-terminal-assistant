import dotenv from "dotenv";

dotenv.config();

export const config = {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    FLIGHT_API_KEY: process.env.FLIGHT_API_KEY,
    IP_INFO_API_KEY: process.env.IP_INFO_API_KEY,
};
