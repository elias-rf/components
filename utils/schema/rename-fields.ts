import type { TTable } from "../../types";
import { isArray } from "../identify/is-array";
import { isObject } from "../identify/is-object";
import { isEmpty } from "../identify/is_empty";
import { fieldsFromTable } from "./fields-from-table";
import { namesFromTable } from "./names-from-table";

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

export function renameToFieldTuple(tupleArray: any[], table: TTable) {
  if (isEmpty(tupleArray)) return tupleArray;
  const nameList = namesFromTable(table);
  const fieldList = fieldsFromTable(table);
  return tupleArray.map((whr) => {
    try {
      whr[0] = renameString(whr[0], nameList, fieldList);
      return whr;
    } catch (error: any) {
      throw new Error(`${table.table} ${error.message}`);
    }
  });
}

export function renameToNameTuple(tupleArray: any[], table: TTable) {
  if (isEmpty(tupleArray)) return tupleArray;
  const nameList = namesFromTable(table);
  const fieldList = fieldsFromTable(table);
  return tupleArray.map((whr) => {
    try {
      whr[0] = renameString(whr[0], fieldList, nameList);
      return whr;
    } catch (error: any) {
      throw new Error(`${table.table} ${error.message}`);
    }
  });
}

export function renameToFieldString(data: string, table: TTable) {
  const nameList = namesFromTable(table);
  const fieldList = fieldsFromTable(table);
  return renameString(data, nameList, fieldList);
}

export function renameToNameString(data: string, table: TTable) {
  const nameList = namesFromTable(table);
  const fieldList = fieldsFromTable(table);
  return renameString(data, fieldList, nameList);
}

export function renameToNameArray(data: any, table: TTable) {
  if (isEmpty(data)) return data;
  const nameList = namesFromTable(table);
  const fieldList = fieldsFromTable(table);
  return data.map((field: any) => {
    const fieldIdx = fieldList.indexOf(field);
    if (fieldIdx === -1) {
      throw new Error(`${field} não é um nome válido: ${fieldList.toString()}`);
    }
    field = nameList[fieldIdx];
    return field;
  });
}

export function renameToFieldArray(data: any, table: TTable) {
  if (isEmpty(data)) return data;
  const nameList = namesFromTable(table);
  const fieldList = fieldsFromTable(table);
  try {
    return data.map((field: any) => {
      const fieldIdx = nameList.indexOf(field);
      if (fieldIdx === -1) {
        throw new Error(
          `${field} não é um nome válido: ${nameList.toString()}`
        );
      }
      field = fieldList[fieldIdx];
      return field;
    });
  } catch (error: any) {
    throw new Error(`${table.table} ${error.message}`);
  }
}

export function renameToNameObject(data: any, table: TTable) {
  if (!isObject(data)) return data;
  const nameList = namesFromTable(table);
  const fieldList = fieldsFromTable(table);
  try {
    const rsp = renameObject(data, fieldList, nameList);
    return rsp;
  } catch (error: any) {
    throw new Error(`${table.table} ${error.message}`);
  }
}

export function renameToFieldObject(data: any, table: TTable) {
  if (!isObject(data)) return data;
  const nameList = namesFromTable(table);
  const fieldList = fieldsFromTable(table);
  try {
    const rsp = renameObject(data, nameList, fieldList);
    return rsp;
  } catch (error: any) {
    throw new Error(`${table.table} ${error.message}`);
  }
}

export function renameToNameArrayObject(data: any[], table: TTable) {
  if (!isArray(data)) return data;
  const nameList = namesFromTable(table);
  const fieldList = fieldsFromTable(table);

  try {
    const rsp = data.map((rec) => {
      return renameObject(rec, fieldList, nameList);
    });
    return rsp;
  } catch (error: any) {
    throw new Error(`${table.table} ${error.message}`);
  }
}

export function renameToFieldArrayObject(data: any[], table: TTable) {
  if (!isArray(data)) return data;
  const nameList = namesFromTable(table);
  const fieldList = fieldsFromTable(table);

  try {
    const rsp = data.map((rec) => {
      return renameObject(rec, nameList, fieldList);
    });
    return rsp;
  } catch (error: any) {
    throw new Error(`${table.table} ${error.message}`);
  }
}
