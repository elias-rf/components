import { zd } from "@/utils/zod/zod";

export const zsAggregate = zd.tuple([zd.string(), zd.any()]);
