import { zd } from "./zod";

export const zsSort = zd.array(
  zd.tuple([zd.string(), zd.enum(["asc", "desc"])])
);
