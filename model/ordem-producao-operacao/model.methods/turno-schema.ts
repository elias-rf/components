import { TFieldClient } from "../../../types";

export function turnoSchema(): () => Promise<TFieldClient[]> {
  return async () => {
    return [
      {
        name: "turno",
        label: "Turno",
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
