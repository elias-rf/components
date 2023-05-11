import { TFilters } from "@/types";
import { assertAny } from "@/utils/asserts/assert-any";
import { zsFilters } from "@/utils/zod/zs-filters";

const FORMAT_INVALID = "filter deve ser no formato [{id:string, value:string}]";

export function assertFilters(
  filters: TFilters,
  fields: { name: string }[]
): asserts filters is TFilters {
  assertAny(zsFilters.safeParse(filters).success, FORMAT_INVALID);

  const nameList = fields.map((field) => field.name);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList.sort();

  for (const filter of filters) {
    if (!nameList.includes(filter.id)) fieldsInvalidos.push(filter.id);
    fieldsLivres = fieldsLivres.filter((f) => f !== filter.id);
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
