import dateAddDays from "./add-days-date";
/**
 * Calcula o domingo da semana indicada pela data
 */
function goWeekStart(date) {
  return dateAddDays(date, -date.getUTCDay());
}

export default goWeekStart;
