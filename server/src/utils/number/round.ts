export function round(number: number, decimalPlaces = 2): number {
  return Number(
    Math.round(Number(number.toString() + "e" + decimalPlaces.toString())) +
      "e-" +
      decimalPlaces.toString()
  );
}

export default round;
