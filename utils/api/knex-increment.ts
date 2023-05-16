import { TFields, TIncrement } from "@/types";
import { assertIncrement } from "@/utils/asserts/assert-increment";

export const knexIncrement = (
  inc: TIncrement,
  schema: TFields
): [string, number] => {
  assertIncrement(inc, schema);

  const conv = schema.reduce<Record<string, string>>((resp, item) => {
    resp[item.name] = item.field;
    return resp;
  }, {});

  const field = conv[inc.id];

  return [field, inc.value];
};
