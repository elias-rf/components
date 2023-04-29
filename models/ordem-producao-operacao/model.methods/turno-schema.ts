import { TFieldDef } from "@mono/types";

export function turnoSchema(): () => Promise<TFieldDef[]> {
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
