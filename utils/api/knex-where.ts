import { TFilters } from "@/types";
import type { TEquality } from "@/utils/api/getEquality";
import { getEquality } from "@/utils/api/getEquality";

/*
[
  {id:'',value: 'value'}
  {id:'',value: '=value'}
  {id:'',value: '>= value'}
  {id:'',value: '> value'}
  {id:'',value: '<= value'}
  {id:'',value: '< value'}
  {id:'',value: '?value'}
  {id:'',value: '?value?'}
  {id:'',value: 'value?'}
  {id:'',value: 'value1 <> value2'}
  {id:'',value: '-'}
]
*/

const where = (type: string, builder: any, equalities: TEquality[]) => {
  equalities.forEach((equality: TEquality) => {
    if (equality.equality === "null") return builder.whereNull(equality.field);
    if (equality.equality === "between")
      return builder.whereBetween(equality.field, equality.value);
    return builder.where(equality.field, equality.equality, equality.value);
  });
};

/**
 * Converte o filter do cliente para where do servidor
 */
export const knexWhere = (
  filters: TFilters = [],
  schema: { field: string; name: string }[]
) => {
  let equalities = filters.map((filter) => getEquality(filter));

  const conv = schema.reduce<Record<string, string>>((resp, item) => {
    resp[item.name] = item.field;
    return resp;
  }, {});
  equalities = equalities.map((equality) => ({
    field: conv[equality.field] || equality.field,
    equality: equality.equality,
    value: equality.value,
  }));

  return (builder: any) => {
    where("where", builder, equalities);
  };
};
