import { TFieldDef } from "@/types";
import { difference } from "../array/difference";
import { isNonEmptyObject } from "../identify/is-non-empty-object";
import { pksFromFieldsClient } from "../schema/pks-from-fields";

export function zIdClient(id: { [field: string]: any }, fields: TFieldDef[]) {
  const resp = isIdClient(id, fields);
  if (resp === "") return;
  throw new Error(resp);
}

/** Receber um object e verifica se propriedades são fields primaryKey do schema */
export function isIdClient(id: { [field: string]: any }, fields: TFieldDef[]) {
  const pkList = pksFromFieldsClient(fields);
  if (!isNonEmptyObject(id))
    return `Id deve ser informado: ${pkList.toString()}`;
  const fault = difference(pkList, Object.keys(id));

  if (fault.length > 0) {
    return `[${fault.toString()}] não foi informado para [id]: ${pkList.toString()}`;
  }
  for (const pk of Object.keys(id)) {
    if (!pkList.includes(pk as any)) {
      return `${pk} não é uma das chaves válidas para [id]: ${pkList.toString()}`;
    }
  }
  return "";
}
