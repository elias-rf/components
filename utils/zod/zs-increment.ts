import { zd } from "@/utils/zod/zod";

export const zsIncrement = zd.object({ id: zd.string(), value: zd.number() });
