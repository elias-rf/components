import { zd } from "./zod";

export const zsFilters = zd.array(
  zd.object({ id: zd.string(), value: zd.string() })
);
