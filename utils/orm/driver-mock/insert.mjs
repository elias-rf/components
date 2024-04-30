export function fnInsert({ data, query }) {
  query.insert && data.push(query.insert);
  return { data, query };
}
