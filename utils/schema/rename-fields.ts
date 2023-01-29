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

function renameObject(data: any, sourceList: string[], targetList: string[]) {
  if (!isObject(data)) return data;
  const rsp: any = {};
  Object.keys(data).map((prop) => {
    const newProp = renameString(prop, sourceList, targetList);
    rsp[newProp] = data[prop];
  });
  return rsp;
}

export function renameToFieldTuple(tupleArray: any[], fields: TFieldServer[]) {
  if (isEmpty(tupleArray)) return tupleArray;
  const nameList = namesFromFields(fields);
  const fieldList = fieldsFromFields(fields);
  return tupleArray.map((whr) => {
    whr[0] = renameString(whr[0], nameList, fieldList);
    return whr;
  });
}

export function renameToNameTuple(tupleArray: any[], fields: TFieldServer[]) {
  if (isEmpty(tupleArray)) return tupleArray;
  const nameList = namesFromFields(fields);
  const fieldList = fieldsFromFields(fields);
  return tupleArray.map((whr) => {
    whr[0] = renameString(whr[0], fieldList, nameList);
    return whr;
  });
}

export function renameToFieldString(data: string, fields: TFieldServer[]) {
  const nameList = namesFromFields(fields);
  const fieldList = fieldsFromFields(fields);
  return renameString(data, nameList, fieldList);
}

export function renameToNameString(data: string, fields: TFieldServer[]) {
  const nameList = namesFromFields(fields);
  const fieldList = fieldsFromFields(fields);
  return renameString(data, fieldList, nameList);
}

export function renameToNameArray(data: any, fields: TFieldServer[]) {
  if (isEmpty(data)) return data;
  const nameList = namesFromFields(fields);
  const fieldList = fieldsFromFields(fields);
  return data.map((field: any) => {
    const fieldIdx = fieldList.indexOf(field);
    if (fieldIdx === -1) {
      throw new Error(`${field} não é um nome válido: ${fieldList.toString()}`);
    }
    field = nameList[fieldIdx];
    return field;
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
  const rsp = renameObject(data, fieldList, nameList);
  return rsp;
}

export function renameToFieldObject(data: any, fields: TFieldServer[]) {
  if (!isObject(data)) return data;
  const nameList = namesFromFields(fields);
  const fieldList = fieldsFromFields(fields);
  const rsp = renameObject(data, nameList, fieldList);
  return rsp;
}

export function renameToNameArrayObject(data: any[], fields: TFieldServer[]) {
  if (!isArray(data)) return data;
  const nameList = namesFromFields(fields);
  const fieldList = fieldsFromFields(fields);

  const rsp = data.map((rec) => {
    return renameObject(rec, fieldList, nameList);
  });
  return rsp;
}

export function renameToFieldArrayObject(data: any[], fields: TFieldServer[]) {
  if (!isArray(data)) return data;
  const nameList = namesFromFields(fields);
  const fieldList = fieldsFromFields(fields);

  const rsp = data.map((rec) => {
    return renameObject(rec, nameList, fieldList);
  });
  return rsp;
}
