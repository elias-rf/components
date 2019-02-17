import dateAddDays from './addDaysDate';
/**
 * Calcula o domingo da semana indicada pela data
 */
function goWeekStart(date) {
    return dateAddDays(date, -date.getUTCDay());
}

export default goWeekStart;
