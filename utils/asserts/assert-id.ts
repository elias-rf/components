import { TId } from "@/types";
import { assertAny } from "@/utils/asserts/assert-any";
import { zsId } from "@/utils/zod/zs-id";

export function assertId(
  id: TId,
  fields: { name: string }[]
): asserts id is TId {
  assertAny(zsId.safeParse(id).success, "id deve ser {[field:string]:any}");
  const nameList = fields.map((field) => field.name);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList.sort();

  for (const field in id) {
    if (!nameList.includes(field)) {
      fieldsInvalidos.push(field);
    }
    fieldsLivres = fieldsLivres.filter((f) => f !== field);
  }
  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `${fieldsInvalidos} não ${
        fieldsInvalidos.length === 1 ? "é id válido" : "são ids válidos"
      } use: ${fieldsLivres}`
    );
  }
}
