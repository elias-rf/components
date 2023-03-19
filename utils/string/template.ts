export function template(
  text: string,
  data: string[] | { [idx: string]: any }
) {
  let response = text;
  if (data === undefined) return text;
  if (Array.isArray(data)) {
    for (const [key, value] of data.entries()) {
      response = response.replaceAll(`{${key}}`, value);
    }
  } else {
    for (const item in data) {
      response = response.replaceAll(`{${item}}`, data[item]);
    }
  }
  return response;
}
