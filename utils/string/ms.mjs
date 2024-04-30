// Helpers.
const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const y = d * 365.25;

/**
 * Parse or format the given value.
 *
 * @param value - The string or number to convert
 * @throws Error if `value` is not a non-empty string or a number
 */
export function ms(value) {
  try {
    if (typeof value === "string" && value.length > 0) {
      return parse(value);
    } else if (typeof value === "number" && isFinite(value)) {
      return value;
    }
    throw new Error("Value is not a string or number.");
  } catch (error) {
    const message = isError(error)
      ? `${error.message}. value=${JSON.stringify(value)}`
      : "An unknown error has occurred.";
    throw new Error(message);
  }
}

/**
 * Parse the given string and return milliseconds.
 *
 * @param str - A string to parse to milliseconds
 * @returns The parsed value in milliseconds, or `NaN` if the string can't be
 * parsed
 */
function parse(str) {
  if (str.length > 100) {
    throw new Error("Value exceeds the maximum length of 100 characters.");
  }
  const match =
    /^(?<value>-?(?:\d+)?\.?\d+) *(?<type>milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
      str
    );
  // Named capture groups need to be manually typed today.
  // https://github.com/microsoft/TypeScript/issues/32098
  const groups = match?.groups;
  if (!groups) {
    return NaN;
  }
  const n = parseFloat(groups.value);
  const type = (groups.type || "ms").toLowerCase();
  switch (type) {
    case "years":
    case "year":
    case "yrs":
    case "yr":
    case "y":
      return n * y;
    case "weeks":
    case "week":
    case "w":
      return n * w;
    case "days":
    case "day":
    case "d":
      return n * d;
    case "hours":
    case "hour":
    case "hrs":
    case "hr":
    case "h":
      return n * h;
    case "minutes":
    case "minute":
    case "mins":
    case "min":
    case "m":
      return n * m;
    case "seconds":
    case "second":
    case "secs":
    case "sec":
    case "s":
      return n * s;
    case "milliseconds":
    case "millisecond":
    case "msecs":
    case "msec":
    case "ms":
      return n;
    default:
      // This should never occur.
      throw new Error(
        `The unit ${type} was matched, but no matching case exists.`
      );
  }
}

/**
 * A type guard for errors.
 *
 * @param value - The value to test
 * @returns A boolean `true` if the provided value is an Error-like object
 */
function isError(value) {
  return typeof value === "object" && value !== null && "message" in value;
}
