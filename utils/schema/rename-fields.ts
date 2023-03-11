import type { TFieldServer } from "../../types";
import { isArray } from "../identify/is-array";
import { isObject } from "../identify/is-object";
import { isEmpty } from "../identify/is_empty";
import { fieldsFromFields } from "./fields-from-fields";
import { namesFromFields } from "./names-from-fields";

function renameString(name = "", sourceList: string[], targetList: string[]) {
  const idx = sourceList.indexOf(name);
  if (idx >= 0) return targetList[idx] as string;
  throw new Error(`${name} não é um nome válido: ${sourceList.toString()}`);
}

function renameTuple(data: any[], sourceList: string[], targetList: string[]) {
  if (isEmpty(data)) return data;
  data[0] = renameString(data[0], sourceList, targetList);
  return data;
}

function renameObjectProps(
  data: any,
  sourceList: string[],
  targetList: string[]
) {
  if (!isObject(data)) return data;
  const rsp: any = {};
  Object.keys(data).map((prop) => {
    const newProp = renameString(prop, sourceList, targetList);
    rsp[newProp] = data[prop];
  });
  return rsp;
}

function renameObjectValues(
  data: any,
  sourceList: string[],
  targetList: string[]
) {
  if (!isObject(data)) return data;

  for (const prop in data) {
    data[prop] = renameString(data[prop], sourceList, targetList);
  }
  return data;
}

function renameArray(data: any, sourceList: string[], targetList: string[]) {
  return data.map((item: any) => {
    if (typeof item === "string")
      return renameString(item, sourceList, targetList);
    if (Array.isArray(item)) return renameTuple(item, sourceList, targetList);
    if (typeof item === "object" && !Array.isArray(item))
      return renameObjectProps(item, sourceList, targetList);
  });
}

function objectPropValue(
  data: any,
  sourceList: string[],
  targetList: string[],
  fnProp: (data: any, sourceList: string[], targetList: string[]) => any,
  fnValue: (data: any, sourceList: string[], targetList: string[]) => any
) {
  if (!isObject(data)) return data;
  const prop1: string = Object.keys(data)[0];
  const vlr1: any = Object.values(data)[0];
  if (sourceList.includes(prop1)) return fnProp(data, sourceList, targetList);
  if (sourceList.includes(vlr1)) return fnValue(data, sourceList, targetList);
  throw new Error(
    `${prop1}:${vlr1} não é um nome válido: ${sourceList.toString()}`
  );
}

///-----------

/**
 * Renomeia Tuple[0]
 *
 * @export
 * @param {any[]} tupleArray
 * @param {TFieldServer[]} fields
 * @return {*}
 */
export function renameToFieldTuple(tupleArray: any[], fields: TFieldServer[]) {
  if (isEmpty(tupleArray)) return tupleArray;
  const nameList = namesFromFields(fields);
  const fieldList = fieldsFromFields(fields);
  return tupleArray.map((whr) => {
    whr[0] = renameString(whr[0], nameList, fieldList);
    return whr;
  });
}

export function renameToFieldArray(data: any, fields: TFieldServer[]) {
  if (isEmpty(data)) return data;
  const nameList = namesFromFields(fields);
  const fieldList = fieldsFromFields(fields);
  return data.map((field: any) => {
    const fieldIdx = nameList.indexOf(field);
    if (fieldIdx === -1) {
      throw new Error(`${field} não é um nome válido: ${nameList.toString()}`);
    }
    field = fieldList[fieldIdx];
    return field;
  });
}

export function renameToNameObject(data: any, fields: TFieldServer[]) {
  if (!isObject(data)) return data;
  const nameList = namesFromFields(fields);
  const fieldList = fieldsFromFields(fields);
  const rsp = renameObjectProps(data, fieldList, nameList);
  return rsp;
}

export function renameToFieldObject(data: any, fields: TFieldServer[]) {
  if (!isObject(data)) return data;
  const nameList = namesFromFields(fields);
  const fieldList = fieldsFromFields(fields);
  const rsp = renameObjectProps(data, nameList, fieldList);
  return rsp;
}

export function renameToNameArrayObject(data: any[], fields: TFieldServer[]) {
  if (!isArray(data)) return data;
  const nameList = namesFromFields(fields);
  const fieldList = fieldsFromFields(fields);

  const rsp = data.map((rec) => {
    return renameObjectProps(rec, fieldList, nameList);
  });
  return rsp;
}

export function renameToFieldArrayObject(data: any[], fields: TFieldServer[]) {
  if (!isArray(data)) return data;
  const nameList = namesFromFields(fields);
  const fieldList = fieldsFromFields(fields);

  const rsp = data.map((rec) => {
    return renameObjectProps(rec, nameList, fieldList);
  });
  return rsp;
}

export function renameFieldToName(data: any, fields: TFieldServer[]) {
  const nameList = namesFromFields(fields);
  const fieldList = fieldsFromFields(fields);

  if (typeof data === "string") return renameString(data, fieldList, nameList);
  if (typeof data === "object" && !Array.isArray(data))
    return objectPropValue(
      data,
      fieldList,
      nameList,
      renameObjectProps,
      renameObjectValues
    );

  if (Array.isArray(data)) {
    return renameArray(data, fieldList, nameList);
  }
}

export function renameNameToField(data: any, fields: TFieldServer[]) {
  const nameList = namesFromFields(fields);
  const fieldList = fieldsFromFields(fields);

  if (typeof data === "string") return renameString(data, nameList, fieldList);
  if (typeof data === "object" && !Array.isArray(data))
    return objectPropValue(
      data,
      nameList,
      fieldList,
      renameObjectProps,
      renameObjectValues
    );

  if (Array.isArray(data)) {
    return renameArray(data, nameList, fieldList);
  }
}
