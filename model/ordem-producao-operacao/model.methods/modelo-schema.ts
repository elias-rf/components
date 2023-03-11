import { TFieldClient } from "../../../types";

export function modeloSchema(): () => Promise<TFieldClient[]> {
  return async () => {
    return [
      {
        name: "modelo",
        label: "Modelo",
        primaryKey: true,
        type: "string",
      },
      {
        name: "quantidade",
        label: "Quantidade",
        type: "int",
      },
    ];
  };
}
