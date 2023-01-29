import { TFieldClient, TFieldServer } from "../../types";
import { difference } from "../array/difference";
import { isNonEmptyObject } from "../identify/is-non-empty-object";
import { namesFromFields } from "../schema/names-from-fields";
import {
  pksFromFieldsClient,
  pksFromFieldsServer,
} from "../schema/pks-from-fields";

export function isId(id: { [field: string]: any }, fields: TFieldServer[]) {
  if (!isNonEmptyObject(id)) return "Id deve ser informado";

  const nameListOk = namesFromFields(
    fields.filter((fld) => fld.primaryKey === true)
  );

  const fieldsInvalidos = [];
  let fieldsLivres = nameListOk.sort();

  for (const field in id) {
    if (!nameListOk.includes(field)) {
      fieldsInvalidos.push(field);
    }
    fieldsLivres = fieldsLivres.filter((f) => f !== field);
  }

  if (fieldsInvalidos.length === 1) {
    return `${fieldsInvalidos} não é um id válido${
      fieldsLivres.length > 0 ? ", use: " : "."
    }${fieldsLivres}`;
  }

  if (fieldsInvalidos.length > 1) {
    return `${fieldsInvalidos} não são id válidos${
      fieldsLivres.length > 0 ? ", use: " : "."
    }${fieldsLivres}`;
  }

  if (fieldsLivres.length > 0) {
    return `${fieldsLivres} não ${
      fieldsLivres.length === 1 ? "foi informado" : "foram informados"
    } para id.`;
  }

  return null;
}

/** Receber um object e verifica se propriedades são fields primaryKey do schema */
export function isIdServer(
  id: { [field: string]: any },
  fields: TFieldServer[]
): string | null {
  if (!isNonEmptyObject(id)) return "Id deve ser informado";
  const pkList = pksFromFieldsServer(fields);
  const fault = difference(pkList, Object.keys(id));

  if (fault.length > 0) {
    return `[${fault.toString()}] não foi informado para [id]: ${pkList.toString()}`;
  }
  for (const pk of Object.keys(id)) {
    if (!pkList.includes(pk as any)) {
      return `${pk} não é uma das chaves válidas para [id]: ${pkList.toString()}`;
    }
  }
  return null;
}

/** Receber um object e verifica se propriedades são fields primaryKey do schema */
export function isIdClient(
  id: { [field: string]: any },
  fields: TFieldClient[]
): string | null {
  if (!isNonEmptyObject(id)) return "Id deve ser informado";
  const pkList = pksFromFieldsClient(fields);
  const fault = difference(pkList, Object.keys(id));

  if (fault.length > 0) {
    return `[${fault.toString()}] não foi informado para [id]: ${pkList.toString()}`;
  }
  for (const pk of Object.keys(id)) {
    if (!pkList.includes(pk as any)) {
      return `${pk} não é uma das chaves válidas para [id]: ${pkList.toString()}`;
    }
  }
  return null;
}
