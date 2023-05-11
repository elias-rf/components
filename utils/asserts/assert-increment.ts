import { TIncrement } from "@/types";
import { assertAny } from "@/utils/asserts/assert-any";
import { zsIncrement } from "@/utils/zod/zs-increment";

export function assertIncrement(
  inc: TIncrement,
  fields: { name: string }[]
): asserts inc is TIncrement {
  assertAny(
    zsIncrement.safeParse(inc).success,
    "increment deve ser {id:string, value:number}"
  );
  const nameList = fields.map((field) => field.name);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList.sort();

  if (!nameList.includes(inc.id)) {
    fieldsInvalidos.push(inc.id);
  }
  fieldsLivres = fieldsLivres.filter((f) => f !== inc.id);

  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `${fieldsInvalidos} não ${
        fieldsInvalidos.length === 1 ? "é campo válido" : "são campos válidos"
      } use: ${fieldsLivres}`
    );
  }
}
