import { TFieldDef, TTableDef } from "@/types";

export function schemaFactory(table: TTableDef) {
  const response = async (): Promise<TFieldDef[]> => {
    return table.fields;
  };

  return response;
}
