import { TSelect } from "@/types";
import { assertSelect } from "@/utils/asserts/assert-select";

export const knexSelect = (
  select: TSelect,
  schema: { field: string; name: string }[]
) => {
  if (select[0] === "*") {
    return schema.map((item) => item.field);
  }

  assertSelect(select, schema);

  const conv = schema.reduce<Record<string, string>>((resp, item) => {
    resp[item.name] = item.field;
    return resp;
  }, {});
  if (select[0] === "*") {
    return Object.values(conv);
  }
  return select.map((field) => conv[field] || field);
};
