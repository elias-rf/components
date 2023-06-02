import { TFields, TIncrement } from "@/types";
import { assertIncrement } from "@/utils/asserts/assert-increment";

export const knexIncrement = (
  inc: TIncrement,
  schema: TFields
): [string, number] => {
  assertIncrement(inc, schema);

  const converter = schema.reduce<Record<string, string>>((resp, item) => {
    resp[item.name] = item.field;
    return resp;
  }, {});

  const response = Object.entries(inc).reduce<[string, number]>(
    (resp, [key]) => {
      resp = [converter[key], inc[key]];
      return resp;
    },
    [] as any
  );

  return response;
};
