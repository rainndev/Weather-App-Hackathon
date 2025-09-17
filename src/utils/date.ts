export const getDayOfWeek = (dateString: string) => {
  // Create a new Date object from the provided date string.
  // The Date constructor handles the parsing of the YYYY-MM-DD format.
  const date = new Date(dateString);

  // Use the Intl.DateTimeFormat API for reliable and locale-aware formatting.
  // It is the standard way to handle date and time formatting in modern JavaScript.
  const options: Intl.DateTimeFormatOptions = { weekday: "short" };

  // Format the date to get the short weekday name.
  // The locale 'en-US' is used to ensure the output is in English.
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

/**
 * Converts an ISO 8601 formatted datetime string to a human-readable date string.
 *
 * @param {string} isoString The ISO 8601 string (e.g., "2025-09-13T14:30").
 * @returns {string} The formatted date string (e.g., "Tuesday, Aug 5, 2025").
 */
export const formatDate = (isoString: string) => {
  const date = new Date(isoString);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};

export const getLongDate = (isoString: string) => {
  const date = new Date(isoString);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
  };

  return date.toLocaleDateString("en-US", options);
};

/**
 * Converts an ISO 8601 timestamp to a 12-hour format string, showing only the hour.
 * @param {string} isoTimestamp The timestamp string in ISO 8601 format (e.g., '2025-09-17T15:30:00').
 * @returns {string} The time in 12-hour format (e.g., '3 PM').
 */
export const convertTo12HrFormat = (isoTimestamp: number) => {
  try {
    const date = new Date(isoTimestamp);

    // Check if the date object is valid
    if (isNaN(date.getTime())) {
      throw new Error("Invalid timestamp provided.");
    }

    let hours = date.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    return `${hours} ${ampm}`;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(String(error));
    }
    return null; // Return null or handle the error as appropriate
  }
};
