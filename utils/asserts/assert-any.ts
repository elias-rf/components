const msgDefault = "Invariant failed";

// https://github.com/alexreardon/tiny-invariant/blob/master/src/tiny-invariant.ts
export function assertAny(
  condition: boolean,
  message?: string | (() => string)
): asserts condition {
  if (condition) {
    return;
  }

  const provided = typeof message === "function" ? message() : message;
  const value = provided ? provided : msgDefault;
  throw new Error(value);
}
