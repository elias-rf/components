import { z } from "../../../utils/zod/z";

export const whereZod = z.array(
  z.tuple([z.string(), z.string(), z.union([z.string(), z.number()])])
);

export const orderZod = z.array(
  z.tuple([z.string(), z.union([z.literal("asc"), z.literal("desc")])])
);

export const selectZod = z.array(z.string());

export const idZod = z.record(z.any());
export const dataZod = z.record(z.any());

export const listZod = z.object({
  where: whereZod,
  limit: z.number(),
  order: orderZod,
  select: selectZod,
  group: selectZod,
  sum: z.record(z.string()),
  min: z.record(z.string()),
  max: z.record(z.string()),
});

export const countZod = z.object({
  where: whereZod,
});

export const readZod = z.object({
  id: idZod,
  select: selectZod,
});

export const delZod = z.object({
  id: idZod,
});

export const updateZod = z.object({
  id: idZod,
  data: dataZod,
  select: selectZod,
});

export const createZod = z.object({
  data: dataZod,
  select: selectZod,
});

export const incrementZod = z.object({
  increment: z.record(z.number()),
  where: whereZod,
  select: selectZod,
});
