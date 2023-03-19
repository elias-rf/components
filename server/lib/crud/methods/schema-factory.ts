import { TFieldDef, TTableDef } from "../../../../types/model";
import { TCrudSchema } from "../crud.type";

export function schemaFactory(table: TTableDef): TCrudSchema {
  const response = async (): Promise<TFieldDef[]> => {
    return table.fields;
  };

  response.help = "Retorna esquema do registro";
  return response;
}
