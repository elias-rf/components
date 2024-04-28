export function fnWhere({ data, query }) {
  let field;
  let value;
  let equality;

  if (!query.where) return { data, query };

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
    data = data.filter((rec) => {
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
  return { data, query };
}
