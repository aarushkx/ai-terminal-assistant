import { config } from "../config/env.js";

export async function trackFlight({ flightNumber, airlineCode, date }) {
    try {
        if (!flightNumber || !airlineCode || !date) {
            throw new Error(
                "Missing required parameters: flightNumber, airlineCode, date"
            );
        }

        const formattedDate = date.toString().replace(/-/g, "").slice(0, 8);

        const FLIGHT_API_KEY = config.FLIGHT_API_KEY;
        const url = `https://api.flightapi.io/airline/${FLIGHT_API_KEY}?num=${flightNumber}&name=${airlineCode}&date=${formattedDate}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `API request failed with status ${response.status}`
            );
        }

        const data = await response.json();

        const formattedResponse = {
            flightInfo: {
                flightNumber,
                airlineCode,
                date: formattedDate,
            },
            departure: data[0]?.departure || [],
            arrival: data[1]?.arrival || [],
        };

        return formattedResponse;
    } catch (error) {
        return {
            error: error.message,
            flightInfo: {
                flightNumber,
                airlineCode,
                date: date.toString().replace(/-/g, "").slice(0, 8),
            },
        };
    }
}
