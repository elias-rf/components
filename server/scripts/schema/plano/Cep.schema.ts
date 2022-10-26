import { TEntity } from "../../../../types";

export const Cep: TEntity = {
  database: "plano",
  table: "Cep",
  schema: [
    {
      field: "CepInicial",
      label: "CepInicial",
      name: "Cep_id",
      type: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CepFinal",
      label: "CepFinal",
      name: "CepFinal",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 50,
    },
    {
      field: "Regiao",
      label: "Regiao",
      name: "Regiao",
      type: "string",
      size: 10,
    },
  ],
};