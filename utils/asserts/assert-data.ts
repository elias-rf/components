import { assertAny } from "@/utils/asserts/assert-any";
import { zsData } from "@/utils/zod/zs-data";

/**
 * Validar se são dados para gravação de um registro informado pelo usuário
 */
export function assertData(
  data: Record<string, any>,
  fields: { name: string; readOnly?: boolean; autoIncrement?: boolean }[]
): asserts data is Record<string, any> {
  assertAny(zsData.safeParse(data).success, "Data deve ser um objeto");
  const nameListMutable = fields.filter(
    (fld) => fld.readOnly !== true && fld.autoIncrement !== true
  );

  const nameListOk = nameListMutable.map((fld) => fld.name);

  const fieldsInvalidos = [];
  let fieldsLivres = nameListOk;

  for (const field in data) {
    if (!nameListOk.includes(field)) {
      fieldsInvalidos.push(field);
    }
    fieldsLivres = fieldsLivres.filter((f) => f !== field);
  }

  if (fieldsInvalidos.length === 1) {
    throw new Error(
      `${fieldsInvalidos} não é um campo válido${
        fieldsLivres.length > 0 ? ", use: " : "."
      }${fieldsLivres}`
    );
  }

  if (fieldsInvalidos.length > 1) {
    throw new Error(
      `${fieldsInvalidos} não são campos válidos${
        fieldsLivres.length > 0 ? ", use: " : "."
      }${fieldsLivres}`
    );
  }
}
