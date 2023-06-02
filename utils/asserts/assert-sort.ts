import { TSort } from "@/types";
import { assertAny } from "@/utils/asserts/assert-any";
import { zsSort } from "@/utils/zod/zs-sort";

const ERR_MESSAGE =
  "order deve ser informado no formato {[field:string]: asc|desc}";

export function assertSort(
  sort: TSort,
  fields: { name: string }[]
): asserts sort is TSort {
  assertAny(zsSort.safeParse(sort).success, ERR_MESSAGE);

  const nameList = fields.map((field) => field.name);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList.sort();

  for (const field in sort) {
    if (!nameList.includes(field)) {
      fieldsInvalidos.push(field);
    }
    fieldsLivres = fieldsLivres.filter((f) => f !== field);
  }
  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `${fieldsInvalidos} não ${
        fieldsInvalidos.length == 1 ? "é válido" : "são válidos"
      } para order use: ${fieldsLivres}`
    );
  }
}
