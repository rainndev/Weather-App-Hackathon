/**
 * Converts Fahrenheit to Celsius.
 * @param {number} fahrenheit The temperature in Fahrenheit.
 * @returns {number} The temperature in Celsius.
 */
export const fahrenheitToCelsius = (fahrenheit: number) => {
  return ((fahrenheit - 32) * 5) / 9;
};

export const getWeatherIconFromCode = (weatherCode: number): string => {
  switch (true) {
    // Clear sky
    case weatherCode === 0:
      return "/images/icon-sunny.webp";

    // Partly cloudy
    case [1, 2].includes(weatherCode):
      return "/images/icon-partly-cloudy.webp";

    // Overcast
    case weatherCode === 3:
      return "/images/icon-overcast.webp";

    // Fog
    case [45, 48].includes(weatherCode):
      return "/images/icon-fog.webp";

    // Drizzle (51–55)
    case weatherCode >= 51 && weatherCode <= 55:
      return "/images/icon-drizzle.webp";

    // Rain (61–65, 80–82)
    case (weatherCode >= 61 && weatherCode <= 65) ||
      (weatherCode >= 80 && weatherCode <= 82):
      return "/images/icon-rain.webp";

    // Snow (71–77, 85–86)
    case (weatherCode >= 71 && weatherCode <= 77) ||
      (weatherCode >= 85 && weatherCode <= 86):
      return "/images/icon-snow.webp";

    // Thunderstorms (95–99)
    case weatherCode >= 95 && weatherCode <= 99:
      return "/images/icon-storm.webp";

    // Default / unknown
    default:
      return "/images/icon-overcast.webp";
  }
};
