import { TFieldDef } from "@mono/types";

export function transferenciaModeloSchema(): () => Promise<TFieldDef[]> {
  return async () => {
    return [
      {
        name: "modelo",
        label: "Modelo",
        labelClass: "text-center",
        fieldClass: "text-left",
        type: "string",
        primaryKey: true,
      },
      {
        name: "quantidade",
        label: "Quantidade",
        labelClass: "text-right",
        fieldClass: "text-right",
      },
    ];
  };
}
