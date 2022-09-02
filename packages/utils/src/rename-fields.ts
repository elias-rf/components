import { GenericObject } from "@er/types/*";
import { isArray } from "./is-array";
import { isEmpty } from "./is-empty";
import { isObject } from "./is-object";

export function renameString(
  name = "",
  nameList: (keyof any)[],
  targetList: (keyof any)[]
) {
  const idx = nameList.indexOf(name);
  if (idx >= 0) return targetList[idx] as string;
  return name;
}

export function renameWhere(
  tupleArray: any[],
  sourceList: (keyof any)[],
  targetList: (keyof any)[]
) {
  if (isEmpty(tupleArray)) return tupleArray;
  return tupleArray.map((whr) => {
    whr[0] = renameString(whr[0], sourceList, targetList);
    return whr;
  });
}

export function renameOrder(
  tupleArray: any[],
  sourceList: (keyof any)[],
  targetList: (keyof any)[]
) {
  if (isEmpty(tupleArray)) return tupleArray;
  return tupleArray.map((whr) => {
    whr[0] = renameString(whr[0], sourceList, targetList);
    return whr;
  });
}

export function renameSelect(
  nameArray: (keyof any)[],
  sourceList: (keyof any)[],
  targetList: (keyof any)[]
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
  sourceList: (keyof any)[],
  targetList: (keyof any)[]
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
  sourceList: (keyof any)[],
  targetList: (keyof any)[]
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
  sourceList: (keyof any)[],
  targetList: (keyof any)[]
): Rec[] {
  if (!isArray(data)) return data;
  return data.map((rec) => {
    return renamePk<Rec>(rec, sourceList, targetList);
  });
}
