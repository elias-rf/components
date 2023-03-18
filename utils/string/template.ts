export function template(text: string, data: string[] | object = []) {
  let response = text;
  for (const item in data) {
    response = response.replaceAll(`{${item}}`, data[item]);
  }
  return response;
}
