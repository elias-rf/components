import { zd } from "@/utils/zod/zod";
import { zsData } from "@/utils/zod/zs-data";
import { zsFilters } from "@/utils/zod/zs-filters";
import { zsLimit } from "@/utils/zod/zs-limit";
import { zsSelect } from "@/utils/zod/zs-select";
import { zsSorts } from "@/utils/zod/zs-sorts";

export const selectZod = zd.array(zd.string());

export const idZod = zd.record(zd.any());
export const dataZod = zd.record(zd.any());

export const listZod = zd.object({
  filters: zsFilters.optional(),
  limit: zsLimit.optional(),
  order: zsSorts.optional(),
  select: zsSelect.optional(),
  group: zsSelect.optional(),
  sum: zd.record(zd.string()).optional(),
  min: zd.record(zd.string()).optional(),
  max: zd.record(zd.string()).optional(),
});

export const countZod = zd.object({
  filters: zsFilters.optional(),
});

export const readZod = zd.object({
  id: zsFilters,
  select: zsSelect.optional(),
});

export const delZod = zd.object({
  id: zsFilters,
});

export const updateZod = zd.object({
  id: zsFilters,
  data: zsData,
  select: selectZod.optional(),
});

export const createZod = zd.object({
  data: zsData,
  select: zsSelect.optional(),
});

export const incrementZod = zd.object({
  increment: zd.record(zd.number()),
  filters: zsFilters,
  select: zsSelect.optional(),
});
