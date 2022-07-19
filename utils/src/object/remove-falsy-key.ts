// This function removes any key with falsy value from a JavaScript object.
export function removeFalsyKey<T>(obj: T) {
  const newObj: Partial<T> = {};

  Object.keys(obj).forEach((key: string) => {
    if (Boolean(obj[key as keyof T])) {
      newObj[key as keyof T] = obj[key as keyof T];
    }
  });
  return newObj;
}
