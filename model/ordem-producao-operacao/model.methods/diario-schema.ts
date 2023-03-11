import { TFieldClient } from "../../../types";

export function diarioSchema(): () => Promise<TFieldClient[]> {
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
