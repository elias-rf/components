import { TFilter } from "@/types";

/*
  {fld: 'value'} => {field:'fld',equality:'=',value:'value'}
  {fld: '=value'} => {field:'fld',equality:'=',value:'value'}
  {fld: '>= value'} => {field:'fld',equality:'>=',value:'value'}
  {fld: '> value'} => {field:'fld',equality:'>',value:'value'}
  {fld: '<= value'} => {field:'fld',equality:'<=',value:'value'}
  {fld: '< value'} => {field:'fld',equality:'<',value:'value'}
  {fld: '?value'} => {field:'fld',equality:'like',value:'%value'}
  {fld: '?value?'} => {field:'fld',equality:'like',value:'%value%'}
  {fld: 'value?'} => {field:'fld',equality:'like',value:'value%'}
  {fld: 'value1 <> value2'} => {field:'fld',equality:'between',value:['value1','value2']}'}
  {fld: '-'} => {field:'fld',equality:'null',value:''}
*/

export type TEquality = {
  field: string;
  equality: string;
  value: string | string[];
};

/**
 * Recebe igualdade como parte do valor e separa em campo, igualdade e valor.
 */
export const getEquality = (param: TFilter): TEquality => {
  const field = Object.keys(param)[0];
  let equality = "=";
  let value: string | string[] = param[field];

  if (value.startsWith("=")) {
    equality = "=";
    value = value.slice(1).trim();
    return { field, equality, value };
  }

  if (value.startsWith(">=")) {
    equality = ">=";
    value = value.slice(2).trim();
    return { field, equality, value };
  }

  if (value.startsWith(">")) {
    equality = ">";
    value = value.slice(1).trim();
    return { field, equality, value };
  }

  if (value.startsWith("<=")) {
    equality = "<=";
    value = value.slice(2).trim();
    return { field, equality, value };
  }

  if (value.startsWith("<")) {
    equality = "<";
    value = value.slice(1).trim();
    return { field, equality, value };
  }

  if (value.includes("?")) {
    equality = "like";
    value = value.replaceAll("?", "%");
    return { field, equality, value };
  }

  if (value.includes("<>")) {
    equality = "between";
    value = value.split("<>").map((vlr) => vlr.trim());
    return { field, equality, value };
  }

  if (value.trim() === "-") {
    equality = "null";
    value = "";
    return { field, equality, value };
  }

  return { field, equality, value };
};
