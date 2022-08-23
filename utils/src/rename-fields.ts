import { GenericObject } from "@er/types/*";
import { isEmpty } from "./is-empty";
import { isArray, isObject } from "./type-guard";

export function renameString(
  name = "",
  nameList: string[],
  targetList: string[]
) {
  const idx = nameList.indexOf(name);
  if (idx >= 0) return targetList[idx];
  return name;
}

export function renameWhere(
  tupleArray: any[],
  sourceList: string[],
  targetList: string[]
) {
  if (isEmpty(tupleArray)) return tupleArray;
  return tupleArray.map((whr) => {
    whr[0] = renameString(whr[0], sourceList, targetList);
    return whr;
  });
}

export function renameOrder(
  tupleArray: any[],
  sourceList: string[],
  targetList: string[]
) {
  if (isEmpty(tupleArray)) return tupleArray;
  return tupleArray.map((whr) => {
    whr[0] = renameString(whr[0], sourceList, targetList);
    return whr;
  });
}

export function renameSelect(
  nameArray: string[],
  sourceList: string[],
  targetList: string[]
) {
  if (isEmpty(nameArray)) return nameArray;
  return nameArray.map((field) => {
    const fieldIdx = sourceList.indexOf(field);
    if (fieldIdx > -1) {
      // throw new Error(`Campo ${field} não encontrado`);
      field = targetList[fieldIdx];
    }
    return field;
  });
}

export function renamePk<Rec extends GenericObject>(
  data: Rec,
  sourceList: string[],
  targetList: string[]
): Rec {
  if (!isObject(data)) return data;
  const rsp = {} as Rec;
  Object.keys(data).map((prop) => {
    const newProp: keyof Rec = renameString(prop, sourceList, targetList);
    rsp[newProp] = data[prop];
  });
  return rsp;
}

export function renameData<Rec extends GenericObject>(
  data: Rec,
  sourceList: string[],
  targetList: string[]
): Rec {
  if (!isObject(data)) return data;
  const rsp = {} as Rec;
  Object.keys(data).map((prop) => {
    const newProp: keyof Rec = renameString(prop, sourceList, targetList);
    rsp[newProp] = data[prop];
  });
  return rsp;
}

export function renameDataArray<Rec extends GenericObject>(
  data: Rec[],
  sourceList: string[],
  targetList: string[]
): Rec[] {
  if (!isArray(data)) return data;
  return data.map((rec) => {
    return renamePk<Rec>(rec, sourceList, targetList);
  });
}
