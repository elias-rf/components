import { TIds } from "@/types";
import { assertAny } from "@/utils/asserts/assert-any";
import { zsIds } from "@/utils/zod/zs-ids";

export function assertIds(
  ids: TIds,
  fields: { name: string }[]
): asserts ids is TIds {
  assertAny(
    zsIds.safeParse(ids).success,
    "id deve ser [{id:string, value:any}]"
  );
  const nameList = fields.map((field) => field.name);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList.sort();

  for (const id of ids) {
    if (!nameList.includes(id.id)) {
      fieldsInvalidos.push(id.id);
    }
    fieldsLivres = fieldsLivres.filter((f) => f !== id.id);
  }
  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `${fieldsInvalidos} não ${
        fieldsInvalidos.length === 1 ? "é id válido" : "são ids válidos"
      } use: ${fieldsLivres}`
    );
  }
}
