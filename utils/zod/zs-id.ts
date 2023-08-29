import { zd } from "@/utils/zod/zod";

export const zsId = zd.array(zd.tuple([zd.string(), zd.any()]));
