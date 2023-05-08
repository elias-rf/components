export const renameString = (
  name = "",
  sourceList: string[],
  targetList: string[]
) => {
  const idx = sourceList.indexOf(name);
  if (idx >= 0) return targetList[idx] as string;
  throw new Error(`${name} não é um nome válido: ${sourceList.toString()}`);
};
