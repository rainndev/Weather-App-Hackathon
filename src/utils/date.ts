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
