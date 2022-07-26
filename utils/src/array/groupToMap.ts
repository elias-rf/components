export function groupToMap<GroupKey, Elem>(
  array: Array<Elem>,
  callback: (value: Elem, index: number, array: Array<Elem>) => GroupKey
): Map<GroupKey, Array<Elem>> {
  const result = new Map();
  for (const [index, elem] of array.entries()) {
    const groupKey = callback(elem, index, array);
    let group = result.get(groupKey);
    if (group === undefined) {
      group = [];
      result.set(groupKey, group);
    }
    group.push(elem);
  }
  return result;
}
