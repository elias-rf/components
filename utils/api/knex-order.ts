import { TSorts } from "@/types";
import { isEmpty } from "../identify/is-empty";

export const knexOrder = (
  sorts: TSorts = [],
  schema?: { field: string; name: string }[]
): { column: string; order: "asc" | "desc" }[] => {
  if (isEmpty(sorts)) return [];
  if (Array.isArray(schema)) {
    const conv = schema.reduce<Record<string, string>>((resp, item) => {
      resp[item.name] = item.field;
      return resp;
    }, {});
    sorts = sorts.map((sort) => ({
      id: conv[sort.id] || sort.id,
      desc: sort.desc,
    }));
  }
  return sorts.map((sort) => ({
    column: sort.id,
    order: sort.desc ? "desc" : "asc",
  }));
};
