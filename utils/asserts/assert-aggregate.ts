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
  const field = Object.keys(id)[0];
  if (!nameList.includes(field)) {
    fieldsInvalidos.push(field);
  }
  fieldsLivres = fieldsLivres.filter((f) => f !== field);

  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `${fieldsInvalidos} não ${
        fieldsInvalidos.length === 1 ? "é id válido" : "são ids válidos"
      } use: ${fieldsLivres}`
    );
  }
}
