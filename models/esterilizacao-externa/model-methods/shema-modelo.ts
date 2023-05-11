import { TSchema } from "@/types";

export async function schemaModelo(): Promise<TSchema> {
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
