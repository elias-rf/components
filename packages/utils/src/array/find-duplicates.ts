export function findDuplicates(arry: any) {
  const uniqueElements = new Set(arry);
  const filteredElements = arry.filter((item) => {
    if (uniqueElements.has(item)) {
      uniqueElements.delete(item);
    } else {
      return item;
    }
  });

  return [...new Set(filteredElements)];
}
