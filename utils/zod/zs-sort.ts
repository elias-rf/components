import { zd } from "./zod";

export const zsSort = zd.record(zd.enum(["asc", "desc"]));
