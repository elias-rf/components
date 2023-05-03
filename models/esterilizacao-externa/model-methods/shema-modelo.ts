import { TFieldDef } from "@/types";

export async function schemaModelo(): Promise<TFieldDef[]> {
  return [
    {
      name: "modelo",
      label: "Modelo",
      typeField: "string",
      primaryKey: true,
    },
    {
      name: "quantidade",
      label: "Quantidade",
      typeField: "int",
    },
  ];
}
