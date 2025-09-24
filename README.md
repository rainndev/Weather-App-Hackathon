# Frontend Mentor - Weather App Solution

This is a solution to the [Weather app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49).
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

---

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The challenge

Users should be able to:

- Search for weather information by entering a location in the search bar
- View current weather conditions including temperature, weather icon, and location details
- See additional weather metrics like "feels like" temperature, humidity percentage, wind speed, and precipitation amounts
- Browse a 7-day weather forecast with daily high/low temperatures and weather icons
- View an hourly forecast showing temperature changes throughout the day
- Switch between different days of the week using the day selector in the hourly forecast section
- Toggle between Imperial and Metric measurement units via the units dropdown
- Switch between specific temperature units (Celsius and Fahrenheit) and measurement units for wind speed (km/h and mph) and precipitation (millimeters) via the units dropdown
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Weather App Screenshot](./screenshot.jpg)

---

### Links

- Solution URL: [GitHub Repo](https://github.com/rainndev/Weather-App-Hackathon)
- Live Site URL: [Live Demo](https://weather-app-hackathon-rainndev.netlify.app/)

---

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Frontend build tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

---

### What I learned

Working on this project helped me strengthen my understanding of:

- Fetching and managing data from an external weather API.
- Handling conditional rendering in React for loading states and error states.
- Using Tailwind CSS for responsive design and hover/focus states.
- Organizing React components in a scalable way for future features.

Example: dynamically showing weather icons based on API codes.

```js
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

```

---

### Continued development

In future improvements, I plan to:

- Implement dark mode toggle.
- Improve accessibility (ARIA roles and keyboard navigation).

---

### Useful resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Helped me with utility classes for responsive design.
- [Open-Meteo API](https://open-meteo.com/) - Free weather API that powers the app.
- [React Docs](https://react.dev/) - For hooks and component structure references.

---

## Author

- Website - [Rain](https://github.com/rainndev)
- Frontend Mentor - [@rainndev](https://www.frontendmentor.io/profile/rainndev)
- GitHub - [rainndev](https://github.com/rainndev)

---

## Acknowledgments

Big thanks to the Frontend Mentor community and hackathon participants for inspiration and feedback!
