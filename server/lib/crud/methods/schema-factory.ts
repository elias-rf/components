import { TFieldClient, TTable } from "../../../../types";
import { TCrudSchema } from "../crud.type";

export function schemaFactory(table: TTable): TCrudSchema {
  const response = async (): Promise<TFieldClient[]> => {
    return table.fields;
  };

  response.help = "Retorna esquema do registro";
  return response;
}
