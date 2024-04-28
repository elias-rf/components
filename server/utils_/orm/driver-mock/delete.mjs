import { fnClone } from "./clone.mjs";

export function fnDelete({ data, query }) {
  let field;
  let value;
  let equality;

  if (query.where === undefined || query.where.length === 0) {
    data.length = 0;
    return { data, query };
  }

  let toDelete = fnClone({ data, query }).data;

  for (const whr of query.where) {
    if (whr.length === 2) {
      field = whr[0];
      equality = "=";
      value = whr[1];
    }
    if (whr.length === 3) {
      field = whr[0];
      equality = whr[1];
      value = whr[2];
    }
    toDelete = toDelete
      .map((rec, index) => {
        rec._index = index;
        return rec;
      })
      .filter((rec) => {
        switch (equality) {
          case "=":
            return rec[field] === value;
          case ">":
            return rec[field] > value;
          case "<":
            return rec[field] < value;
          case "<=":
            return rec[field] <= value;
          case ">=":
            return rec[field] >= value;
          case "like":
            return rec[field].includes(value);
          case "between":
            return rec[field] >= value[0] && rec[field] <= value[1];
          default:
            return true;
        }
      });
  }

  for (let i = toDelete.length - 1; i >= 0; i--) {
    data.splice(toDelete[i]._index, 1);
  }
  return { data, query };
}
