import { TSort } from "@/types";

export const objectionOrder = (
  sort: TSort = {}
): { column: string; order: "asc" | "desc" }[] => {
  return Object.keys(sort).map((item) => ({ column: item, order: sort[item] }));
};
