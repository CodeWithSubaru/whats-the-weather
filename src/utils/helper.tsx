export const formatTimeTo12Hour = (timestamp: number): string => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours > 12 ? hours - 12 : hours;

  return `${formattedHours}:${minutes} ${period}`;
};
export const titleCase = (string: string): string =>
  string[0].toUpperCase() + string.slice(1);
