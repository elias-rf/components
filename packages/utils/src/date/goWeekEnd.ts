import addDaysDate from "./add-days-date";

/**
 * Calcula o sábado da semanda indicada pela data
 */
function goWeekEnd(date) {
  return addDaysDate(date, 6 - date.getUTCDay());
}

export default goWeekEnd;
