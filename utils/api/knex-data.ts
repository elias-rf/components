import { TGenericObject } from "@/types";
import { assertData } from "@/utils/asserts/assert-data";

export const knexData = (
  data: TGenericObject,
  schema: { field: string; name: string }[]
) => {
  assertData(data, schema);

  const conv = schema.reduce<Record<string, string>>((resp, item) => {
    resp[item.name] = item.field;
    return resp;
  }, {});

  const response: TGenericObject = {};
  for (const field in data) {
    response[conv[field]] = data[field];
  }

  return response;
};
