export const setProp = (
  obj: Record<string, unknown>,
  path: string,
  value: unknown
): void => {
  let schema = obj; // a moving reference to internal objects within obj

  const pList = path.split(".");
  const len = pList.length;
  for (let i = 0; i < len - 1; i++) {
    const elem = pList[i];
    if (!schema[elem]) {
      schema[elem] = {};
    }
    schema = schema[elem] as Record<string, unknown>;
  }
  schema[pList[len - 1]] = value;
};
