import { getCurrentDateTime } from "./datetime.js";
import { getWeatherInfo } from "./weather.js";
import { getRegionInfo } from "./getRegionInfo.js";
import { convertCurrency } from "./currency.js";
import { trackFlight } from "./flight.js";
import { sendInstagramMessage } from "./instagram.js";
import { exec } from "./exec.js";

export const TOOLS = {
    getCurrentDateTime,
    getWeatherInfo,
    getRegionInfo,
    convertCurrency,
    trackFlight,
    sendInstagramMessage,
    exec,
};
