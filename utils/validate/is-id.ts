import { difference } from "../array/difference";
import { isNonEmptyObject } from "../identify/is-non-empty-object";
import { pksFromFields } from "../schema/pks-from-fields";

export function isId(
  id: { [field: string]: any },
  fields: TField[]
): string | null {
  if (!isNonEmptyObject(id)) return "Id deve ser informado";
  const pkList = pksFromFields(fields);
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
