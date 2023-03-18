import { TField } from "../../../types";

export function turnoSchema(): () => Promise<TField[]> {
  return async () => {
    return [
      {
        name: "turno",
        label: "Turno",
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
