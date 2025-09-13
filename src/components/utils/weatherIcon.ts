import type { temperatureType } from "@/api/weatherApi";

/**
 * Converts Fahrenheit to Celsius.
 * @param {number} fahrenheit The temperature in Fahrenheit.
 * @returns {number} The temperature in Celsius.
 */
export const fahrenheitToCelsius = (fahrenheit: number) => {
  return ((fahrenheit - 32) * 5) / 9;
};

/**
 * Determines the weather icon based on temperature in Celsius or Fahrenheit.
 *
 * This function makes a simple assumption to map a temperature range to a weather condition
 * based on the provided icons. The URLs are placeholders for demonstration purposes.
 *
 * @param {number} temperature The temperature value.
 * @param {string} unit The unit of temperature, "celsius" or "fahrenheit".
 * @returns {string} The placeholder URL for the corresponding weather icon.
 */
export const getWeatherIcon = (
  temperature: number,
  unit: temperatureType,
): string => {
  let tempC = temperature;

  if (unit.toLowerCase() === "fahrenheit") {
    tempC = fahrenheitToCelsius(temperature);
  }

  // Determine the weather condition based on a simplified temperature range
  if (tempC <= 0) {
    return "/public/images/icon-snow.webp"; // Freezing or below
  } else if (tempC > 0 && tempC <= 10) {
    return "/public/images/icon-rain.webp"; // Cold to cool, suggesting rain
  } else if (tempC > 10 && tempC <= 20) {
    return "/public/images/icon-partly-cloudy.webp"; // Mild temperature
  } else if (tempC > 20 && tempC <= 30) {
    return "/public/images/icon-sunny.webp"; // Warm and sunny
  } else {
    return "/public/images/icon-overcast.webp"; // Extreme heat or other condition
  }
};
