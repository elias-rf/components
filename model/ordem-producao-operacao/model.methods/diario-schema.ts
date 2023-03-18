import { TField } from "../../../types";

export function diarioSchema(): () => Promise<TField[]> {
  return async () => {
    return [
      {
        name: "dia",
        label: "Dia",
        primaryKey: true,
        typeField: "string",
      },
      {
        name: "diaSemana",
        label: "Dia Semana",
        typeField: "string",
      },
      {
        name: "quantidade",
        label: "Quantidade",
        typeField: "string",
      },
    ];
  };
}
