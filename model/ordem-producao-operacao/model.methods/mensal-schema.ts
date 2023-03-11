import { TFieldClient } from "../../../types";

export function mensalSchema(): () => Promise<TFieldClient[]> {
  return async () => {
    return [
      {
        name: "mes",
        label: "Mês",
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
