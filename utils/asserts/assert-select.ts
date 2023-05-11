import { TSelect } from "@/types";
import { assertAny } from "@/utils/asserts/assert-any";
import { zsSelect } from "@/utils/zod/zs-select";

export function assertSelect(
  select: TSelect,
  fields: { name: string }[]
): asserts select is TSelect {
  assertAny(
    zsSelect.safeParse(select).success,
    "select deve ser um array de campos"
  );

  if (select[0] === "*") {
    return;
  }

  const nameList = fields.map((field) => field.name);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList.sort();

  for (const fld of select) {
    if (!nameList.includes(fld)) {
      fieldsInvalidos.push(fld);
    }
    fieldsLivres = fieldsLivres.filter((f) => f !== fld);
  }
  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `${fieldsInvalidos} não ${
        fieldsInvalidos.length === 1
          ? "é um campo válido"
          : "são campos válidos"
      } use: ${fieldsLivres}`
    );
  }
}
