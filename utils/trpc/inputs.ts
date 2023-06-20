import { zd } from "@/utils/zod/zod";
import { zsAggregate } from "@/utils/zod/zs-aggregate";
import { zsData } from "@/utils/zod/zs-data";
import { zsFilter } from "@/utils/zod/zs-filter";
import { zsId } from "@/utils/zod/zs-id";
import { zsLimit } from "@/utils/zod/zs-limit";
import { zsSelect } from "@/utils/zod/zs-select";
import { zsSort } from "@/utils/zod/zs-sort";

export const selectZod = zd.array(zd.string());

export const idZod = zd.record(zd.any());
export const dataZod = zd.record(zd.any());

export const listZod = zd.object({
  filter: zsFilter.optional(),
  limit: zsLimit.optional(),
  sort: zsSort.optional(),
  select: zsSelect.optional(),
  group: zsSelect.optional(),
  sum: zsAggregate.optional(),
  min: zsAggregate.optional(),
  max: zsAggregate.optional(),
});

export const countZod = zd.object({
  filter: zsFilter.optional(),
});

export const readZod = zd.object({
  id: zsId,
  select: zsSelect.optional(),
});

export const delZod = zd.object({
  id: zsId,
});

export const updateZod = zd.object({
  id: zsId,
  data: zsData,
  select: selectZod.optional(),
});

export const createZod = zd.object({
  data: zsData,
  select: zsSelect.optional(),
});

export const incrementZod = zd.object({
  increment: zd.record(zd.number()),
  filter: zsFilter,
  select: zsSelect.optional(),
});
