import { config } from "../config/env.js";

export async function getRegionInfo() {
    try {
        const url = `https://ipinfo.io/json?token=${config.IP_INFO_API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();

        return {
            city: data.city,
            region: data.region,
            country: data.country,
            loc: data.loc,
            timezone: data.timezone,
        };
    } catch (error) {
        return null;
    }
}

getRegionInfo();
