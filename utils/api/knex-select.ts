import { TSelect } from "@/types";

export const knexSelect = (
  select: TSelect,
  schema?: { field: string; name: string }[]
) => {
  if (Array.isArray(schema)) {
    const conv = schema.reduce<Record<string, string>>((resp, item) => {
      resp[item.name] = item.field;
      return resp;
    }, {});
    select = select.map((field) => conv[field] || field);
  }
  return select;
};
