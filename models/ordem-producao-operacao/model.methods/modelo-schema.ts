import { TFieldDef } from "@/types";

export function modeloSchema(): () => Promise<TFieldDef[]> {
  return async () => {
    return [
      {
        name: "modelo",
        label: "Modelo",
        primaryKey: true,
        typeField: "string",
      },
      {
        name: "quantidade",
        label: "Quantidade",
        typeField: "int",
      },
    ];
  };
}
