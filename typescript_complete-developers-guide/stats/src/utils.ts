export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((value: string) => {
    return parseInt(value);
  });
  const day = dateParts[0];
  const month = dateParts[1];
  const year = dateParts[2];
  return new Date(year, month - 1, day);
};
