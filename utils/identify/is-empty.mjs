// test results
//---------------
// []        true, empty array
// {}        true, empty object
// null      true
// undefined true
// ""        true, empty string
// ''        true, empty string
// 0         false, number
// true      false, boolean
// false     false, boolean
// Date      false
// function  false

export function isEmpty(input) {
  if (typeof input === "undefined" || input === null) {
    return true;
  }
  if (typeof input === "string" || Array.isArray(input)) {
    return input.length === 0;
  }
  if (typeof input === "object") {
    return Object.keys(input).length === 0;
  }
  return false;
}
