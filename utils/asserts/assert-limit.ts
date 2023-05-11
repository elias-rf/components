import { assertAny } from "@/utils/asserts/assert-any";
import { zsLimit } from "@/utils/zod/zs-limit";

export function assertLimit(limit: number): asserts limit is number {
  assertAny(
    zsLimit.safeParse(limit).success,
    "Limit deve estar entre 1 e 10.000"
  );
}
