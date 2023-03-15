import { TTable } from "../../../../types/model";

export const Cep: TTable = {
  database: "plano",
  table: "Cep",
  fields: [
    {
      field: "CepInicial",
      label: "CepInicial",
      name: "Cep_id",
      typeField: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CepFinal",
      label: "CepFinal",
      name: "CepFinal",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 50,
    },
    {
      field: "Regiao",
      label: "Regiao",
      name: "Regiao",
      typeField: "string",
      size: 10,
    },
  ],
};
