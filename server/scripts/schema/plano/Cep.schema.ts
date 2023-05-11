import { TTableDef } from "@/types/model";

export const Cep: TTableDef = {
  database: "plano",
  table: "Cep",
  fields: [
    {
      field: "CepInicial",
      label: "CepInicial",
      name: "Cep_id",
      typeField: "float",

      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CepFinal",
      label: "CepFinal",
      name: "CepFinal",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
    {
      field: "Regiao",
      label: "Regiao",
      name: "Regiao",
      typeField: "string",
    },
  ],
};
