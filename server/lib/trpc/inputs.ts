import { zd } from "@mono/utils/zod/zod";

export const whereZod = zd.array(
  zd.tuple([zd.string(), zd.string(), zd.union([zd.string(), zd.number()])])
);

export const orderZod = zd.array(
  zd.tuple([zd.string(), zd.union([zd.literal("asc"), zd.literal("desc")])])
);

export const selectZod = zd.array(zd.string());

export const idZod = zd.record(zd.any());
export const dataZod = zd.record(zd.any());

export const listZod = zd.object({
  where: whereZod.optional(),
  limit: zd.number().optional(),
  order: orderZod.optional(),
  select: selectZod.optional(),
  group: selectZod.optional(),
  sum: zd.record(zd.string()).optional(),
  min: zd.record(zd.string()).optional(),
  max: zd.record(zd.string()).optional(),
});

export const countZod = zd.object({
  where: whereZod.optional(),
});

export const readZod = zd.object({
  id: idZod,
  select: selectZod.optional(),
});

export const delZod = zd.object({
  id: idZod,
});

export const updateZod = zd.object({
  id: idZod,
  data: dataZod,
  select: selectZod.optional(),
});

export const createZod = zd.object({
  data: dataZod,
  select: selectZod.optional(),
});

export const incrementZod = zd.object({
  increment: zd.record(zd.number()),
  where: whereZod,
  select: selectZod.optional(),
});
