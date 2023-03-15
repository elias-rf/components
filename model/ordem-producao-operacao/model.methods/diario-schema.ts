import { TField } from "../../../types";

export function diarioSchema(): () => Promise<TField[]> {
  return async () => {
    return [
      {
        name: "dia",
        label: "Dia",
        primaryKey: true,
        type: "string",
      },
      {
        name: "diaSemana",
        label: "Dia Semana",
        type: "string",
      },
      {
        name: "quantidade",
        label: "Quantidade",
        type: "string",
      },
    ];
  };
}
