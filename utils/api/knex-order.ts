import { TSort } from "@/types";
import { isEmpty } from "../identify/is-empty";

export const knexOrder = (
  sort: TSort = {},
  schema: { field: string; name: string }[]
): { column: string; order: "asc" | "desc" }[] => {
  if (isEmpty(sort)) return [];
  const conv = schema.reduce<Record<string, string>>((resp, item) => {
    resp[item.name] = item.field;
    return resp;
  }, {});
  const response = [];
  for (const field in sort) {
    response.push({ column: conv[field] || field, order: sort[field] });
  }
  return response;
};
