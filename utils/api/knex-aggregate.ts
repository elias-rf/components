import { TAggregate } from "@/types";
import { assertAggregate } from "@/utils/asserts/assert-aggregate";

export const knexAggregate = (
  sum: TAggregate,
  schema: { field: string; name: string }[]
) => {
  assertAggregate(sum, schema);

  const conv = schema.reduce<Record<string, string>>((resp, item) => {
    resp[item.name] = item.field;
    return resp;
  }, {});
  const field = conv[sum.id];

  return { [sum.label]: field };
};
