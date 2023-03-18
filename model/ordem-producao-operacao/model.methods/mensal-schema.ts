import { TField } from "../../../types";

export function mensalSchema(): () => Promise<TField[]> {
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
