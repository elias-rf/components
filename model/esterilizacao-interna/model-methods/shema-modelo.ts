import { TField } from "../../../types";

export async function schemaModelo(): Promise<TField[]> {
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