import { TField } from "../../../types";

export async function schemaDiario(): Promise<TField[]> {
  return [
    {
      name: "dia",
      label: "Dia",
      typeField: "string",
      primaryKey: true,
    },
    {
      name: "dia_semana",
      label: "Dia Semana",
      typeField: "string",
    },
    {
      name: "quantidade",
      label: "Quantidade",
      typeField: "int",
    },
  ];
}
