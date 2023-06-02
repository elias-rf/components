import { TFilter } from "@/types";
import { assertAny } from "@/utils/asserts/assert-any";
import { zsFilter } from "@/utils/zod/zs-filter";

const FORMAT_INVALID = "filter deve ser no formato [{id:string, value:string}]";

export function assertFilter(
  filter: TFilter,
  fields: { name: string }[]
): asserts filter is TFilter {
  assertAny(zsFilter.safeParse(filter).success, FORMAT_INVALID);

  const nameList = fields.map((field) => field.name);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList.sort();

  for (const field in filter) {
    if (!nameList.includes(field)) fieldsInvalidos.push(field);
    fieldsLivres = fieldsLivres.filter((f) => f !== field);
  }
  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `${fieldsInvalidos} não ${
        fieldsInvalidos.length === 1
          ? "é um campo válido"
          : "são campos válidos"
      } para where use: ${fieldsLivres}`
    );
  }
}
