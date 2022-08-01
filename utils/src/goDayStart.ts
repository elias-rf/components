/**
 * Zera o componente de hora de uma data
 */
function goDayStart(date: Date) {
  const rsp = date;
  rsp.setUTCHours(0, 0, 0, 0);
  return rsp;
}

export default goDayStart;
