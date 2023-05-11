import { zd } from "@/utils/zod/zod";

export const zsIds = zd.array(zd.object({ id: zd.string(), value: zd.any() }));
