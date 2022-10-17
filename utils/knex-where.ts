import { Where } from "../types";

/*
[
  ['field','=', value]
  ['field','>=', value]
  ['field','>', value]
  ['field','<=', value]
  ['field','<', value]
  ['field','in', [value1, value2, value3]]
  ['field','between', [value1, value2]]
  ['field','like', '%value%']
  ['field','is', null]
]
*/

function where(type: string, builder: any, whereArray: any) {
  whereArray.forEach((item: any) => {
    if (item.length === 3) {
      if (item[1] === "not is") {
        return builder.whereNotNull(item[0]);
      }
      builder[type](...item);
    } else {
      if (item[0] === "or") where("orWhere", builder, item[1]); // or
      if (item[0] === "and") where("andWhere", builder, item[1]); // and
    }
  });
}

export function knexWhere(whereArray: Where[] = []) {
  return (builder: any) => {
    where("where", builder, whereArray);
  };
}
