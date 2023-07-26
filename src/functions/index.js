export const formatDate = (awsDate, awsTime) => {
  const date = new Date(`${awsDate}T${awsTime}:00.000Z`);
  return date.toLocaleDateString("fr-FR", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export const formatUpperCase = (upper) =>
  upper.charAt(0) + upper.slice(1).toLowerCase();
