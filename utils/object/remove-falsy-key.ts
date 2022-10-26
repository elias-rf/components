// This function removes any key with falsy value from a JavaScript object.
export function removeFalsyKey(obj: Record<string, any>) {
  const newObj: Record<string, any> = {};

  Object.keys(obj).forEach((key: string) => {
    if (obj[key]) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}
