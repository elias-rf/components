import { TFieldClient } from "../../../types";

export async function schemaModelo(): Promise<TFieldClient[]> {
  return [
    {
      name: "modelo",
      label: "Modelo",
      type: "string",
      primaryKey: true,
    },
    {
      name: "quantidade",
      label: "Quantidade",
      type: "int",
    },
  ];
}
