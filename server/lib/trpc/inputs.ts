import { z } from "../../../utils/zod/z";

export const whereSchema = z.object({
  where: z.tuple([z.string(), z.string(), z.union([z.string(), z.number()])]),
});
