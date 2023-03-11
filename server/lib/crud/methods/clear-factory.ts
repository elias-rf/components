import type { TTable } from "../../../../types";
import { TGenericObject } from "../../../../types";
import { recordClear } from "../../record-clear";
import { TCrudClear } from "../crud.type";

export function clearFactory(table: TTable): TCrudClear {
  const response = async (): Promise<TGenericObject> => {
    return recordClear(table.fields);
  };
  response.help = `Retorna um registro com os valores default`;
  return response;
}
