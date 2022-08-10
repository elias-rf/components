/**
 * Adiciona uma quantidade de dias para uma data
 *
 * @export
 * @param date data inicial
 * @param days quantidade de dias positiva ou negativa para somar
 * @returns nova data com o resultado
 * @example
 * addDaysDate('2000-02-15', 40) // '2000-03-26'
 * @example
 * addDaysDate('2000-02-15', -20) // '2000-01-26'
 */

export function addDaysDate(date: Date, days: number): Date {
  const MILISEG_DIA = 24 * 3600 * 1000;
  return new Date(date.valueOf() + days * MILISEG_DIA);
}
