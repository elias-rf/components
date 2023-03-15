import { TField, TTable } from "../../../../types/model";
import { TCrudSchema } from "../crud.type";

export function schemaFactory(table: TTable): TCrudSchema {
  const response = async (): Promise<TField[]> => {
    return table.fields;
  };

  response.help = "Retorna esquema do registro";
  return response;
}
