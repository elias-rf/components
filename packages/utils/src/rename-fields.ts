import { TEntity } from "@er/types";
import { fieldsFromEntity } from "./fields-from-entity";
import { isArray } from "./is-array";
import { isEmpty } from "./is-empty";
import { isObject } from "./is-object";
import { namesFromEntity } from "./names-from-entity";

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

export function renameToFieldTuple(tupleArray: any[], entity: TEntity) {
  if (isEmpty(tupleArray)) return tupleArray;
  const nameList = namesFromEntity(entity);
  const fieldList = fieldsFromEntity(entity);
  return tupleArray.map((whr) => {
    whr[0] = renameString(whr[0], nameList, fieldList);
    return whr;
  });
}

export function renameToNameTuple(tupleArray: any[], entity: TEntity) {
  if (isEmpty(tupleArray)) return tupleArray;
  const nameList = namesFromEntity(entity);
  const fieldList = fieldsFromEntity(entity);
  return tupleArray.map((whr) => {
    whr[0] = renameString(whr[0], fieldList, nameList);
    return whr;
  });
}

export function renameToFieldString(data: string, entity: TEntity) {
  const nameList = namesFromEntity(entity);
  const fieldList = fieldsFromEntity(entity);
  return renameString(data, nameList, fieldList);
}

export function renameToNameString(data: string, entity: TEntity) {
  const nameList = namesFromEntity(entity);
  const fieldList = fieldsFromEntity(entity);
  return renameString(data, fieldList, nameList);
}

export function renameToNameArray(data: any, entity: TEntity) {
  if (isEmpty(data)) return data;
  const nameList = namesFromEntity(entity);
  const fieldList = fieldsFromEntity(entity);
  return data.map((field: any) => {
    const fieldIdx = fieldList.indexOf(field);
    if (fieldIdx === -1) {
      throw new Error(`${field} não é um nome válido: ${fieldList.toString()}`);
    }
    field = nameList[fieldIdx];
    return field;
  });
}

export function renameToFieldArray(data: any, entity: TEntity) {
  if (isEmpty(data)) return data;
  const nameList = namesFromEntity(entity);
  const fieldList = fieldsFromEntity(entity);
  return data.map((field: any) => {
    const fieldIdx = nameList.indexOf(field);
    if (fieldIdx === -1) {
      throw new Error(`${field} não é um nome válido: ${nameList.toString()}`);
    }
    field = fieldList[fieldIdx];
    return field;
  });
}

export function renameToNameObject(data: any, entity: TEntity) {
  if (!isObject(data)) return data;
  const nameList = namesFromEntity(entity);
  const fieldList = fieldsFromEntity(entity);
  return renameObject(data, fieldList, nameList);
}

export function renameToFieldObject(data: any, entity: TEntity) {
  if (!isObject(data)) return data;
  const nameList = namesFromEntity(entity);
  const fieldList = fieldsFromEntity(entity);
  return renameObject(data, nameList, fieldList);
}

export function renameToNameArrayObject(data: any[], entity: TEntity) {
  if (!isArray(data)) return data;
  const nameList = namesFromEntity(entity);
  const fieldList = fieldsFromEntity(entity);
  return data.map((rec) => {
    return renameObject(rec, fieldList, nameList);
  });
}

export function renameToFieldArrayObject(data: any[], entity: TEntity) {
  if (!isArray(data)) return data;
  const nameList = namesFromEntity(entity);
  const fieldList = fieldsFromEntity(entity);
  return data.map((rec) => {
    return renameObject(rec, nameList, fieldList);
  });
}
