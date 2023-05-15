import { TSchema } from "@/types";

export function diarioSchema(): () => Promise<TSchema> {
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
