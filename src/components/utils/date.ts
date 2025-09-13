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
