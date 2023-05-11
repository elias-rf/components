import { TSorts } from "@/types";
import { assertAny } from "@/utils/asserts/assert-any";
import { zsSorts } from "@/utils/zod/zs-sorts";

const ERR_MESSAGE = "order deve ser informado no formato [[field, asc|desc]]";

export function assertSorts(
  sorts: TSorts,
  fields: { name: string }[]
): asserts sorts is TSorts {
  assertAny(zsSorts.safeParse(sorts).success, ERR_MESSAGE);

  const nameList = fields.map((field) => field.name);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList.sort();

  for (const sort of sorts) {
    if (!nameList.includes(sort.id)) {
      fieldsInvalidos.push(sort.id);
    }
    fieldsLivres = fieldsLivres.filter((f) => f !== sort.id);
  }
  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `${fieldsInvalidos} não ${
        fieldsInvalidos.length == 1 ? "é válido" : "são válidos"
      } para order use: ${fieldsLivres}`
    );
  }
}
