import { TFieldDef } from "../../../types";

export function mensalSchema(): () => Promise<TFieldDef[]> {
  return async () => {
    return [
      {
        name: "mes",
        label: "Mês",
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
