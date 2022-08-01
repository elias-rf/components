export function group<GroupKey extends string | symbol, Elem>(
  array: Array<Elem>,
  callback: (value: Elem, index: number, array: Array<Elem>) => GroupKey
): { [k: GroupKey]: Array<Elem> } {
  const result = Object.create(null);
  for (const [index, elem] of array.entries()) {
    const groupKey = callback(elem, index, array);
    if (!(groupKey in result)) {
      result[groupKey] = [];
    }
    result[groupKey].push(elem);
  }
  return result;
}
