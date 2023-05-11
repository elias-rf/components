import { zd } from "./zod";

export const zsLimit = zd.number().int().min(1).max(10000);
