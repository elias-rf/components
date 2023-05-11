import { TAggregate } from "@/types";
import { assertAny } from "@/utils/asserts/assert-any";
import { zsAggregate } from "@/utils/zod/zs-aggregate";

export function assertAggregate(
  id: TAggregate,
  fields: { name: string }[]
): asserts id is TAggregate {
  assertAny(
    zsAggregate.safeParse(id).success,
    "aggregate deve ser {id:string, label:string}"
  );
  const nameList = fields.map((field) => field.name);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList.sort();

  if (!nameList.includes(id.id)) {
    fieldsInvalidos.push(id.id);
  }
  fieldsLivres = fieldsLivres.filter((f) => f !== id.id);

  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `${fieldsInvalidos} não ${
        fieldsInvalidos.length === 1 ? "é id válido" : "são ids válidos"
      } use: ${fieldsLivres}`
    );
  }
}
