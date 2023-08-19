import { TFilter } from "@/types";
import type { TEquality } from "@/models/utils/getEquality";
import { getEquality } from "@/models/utils/getEquality";

/*
{
  field:'value',
  field:'=value',
  field:'>= value',
  field:'> value',
  field:'<= value',
  field:'< value',
  field:'?value',
  field:'?value?',
  field:'value?',
  field:'value1 <> value2',
  field:'-',
}
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
export const objectionWhere = (filter: TFilter = {}) => {
  let equalities = Object.keys(filter).map((field) =>
    getEquality({ [field]: filter[field] })
  );

  equalities = equalities.map((equality) => ({
    field: equality.field,
    equality: equality.equality,
    value: equality.value,
  }));

  return (builder: any) => {
    where("where", builder, equalities);
  };
};
