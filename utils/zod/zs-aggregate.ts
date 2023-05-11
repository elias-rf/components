import { zd } from "@/utils/zod/zod";

export const zsAggregate = zd.object({ id: zd.string(), label: zd.string() });
