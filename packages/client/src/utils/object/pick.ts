export default function pick(
  object: { [prop: string]: any },
  allowed: string[]
) {
  const filtered = Object.keys(object)
    .filter((key) => allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = object[key];
      return obj;
    }, {} as { [prop: string]: any });

  return filtered;
}
