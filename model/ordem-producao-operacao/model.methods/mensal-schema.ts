import { TField } from "../../../types";

export function mensalSchema(): () => Promise<TField[]> {
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
