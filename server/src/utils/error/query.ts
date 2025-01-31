export const handleQueryError = (error: Error, queryName: string) => {
  const message = error.message || "Internal Server Error";
  const log = `QUERY ${queryName} ERROR: ${message}`;
  console.error(log);
  throw new Error(message);
};
