import { TGenericObject } from "../../../../types";
import type { TTable } from "../../../../types/model";
import { recordClear } from "../../../../utils/schema/record-clear";
import { TCrudClear } from "../crud.type";

export function clearFactory(table: TTable): TCrudClear {
  const response = async (): Promise<TGenericObject> => {
    return recordClear(table.fields);
  };
  response.help = `Retorna um registro com os valores default`;
  return response;
}