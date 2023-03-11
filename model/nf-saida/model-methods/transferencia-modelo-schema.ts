import { TFieldClient } from "../../../types";

export function transferenciaModeloSchema(): () => Promise<TFieldClient[]> {
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
