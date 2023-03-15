import { TField } from "../../types";
import { isObject } from "../identify/is-object";
import { namesFromFields } from "../schema/names-from-fields";

/**
 * Validar se são dados para gravação de um registro informado pelo usuário
 */
export function isData<Rec>(data: Rec, fields: TField[]): string | null {
  if (!isObject(data)) return "Data deve ser um objeto";

  const nameListOk = namesFromFields(
    fields.filter((fld) => fld.readOnly !== true && fld.autoIncrement !== true)
  );

  const fieldsInvalidos = [];
  let fieldsLivres = nameListOk;

  for (const field in data) {
    if (!nameListOk.includes(field)) {
      fieldsInvalidos.push(field);
    }
    fieldsLivres = fieldsLivres.filter((f) => f !== field);
  }

  if (fieldsInvalidos.length === 1) {
    return `${fieldsInvalidos} não é um campo válido${
      fieldsLivres.length > 0 ? ", use: " : "."
    }${fieldsLivres}`;
  }

  if (fieldsInvalidos.length > 1) {
    return `${fieldsInvalidos} não são campos válidos${
      fieldsLivres.length > 0 ? ", use: " : "."
    }${fieldsLivres}`;
  }

  return null;
}
