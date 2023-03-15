import { TField } from "../../../types";

export function turnoSchema(): () => Promise<TField[]> {
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
