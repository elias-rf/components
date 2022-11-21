import { TTable } from "../../../../types";

export const GrupoFornecedores: TTable = {
  database: "plano",
  table: "GrupoFornecedores",
  fields: [
    {
      field: "CdGrupo",
      label: "CdGrupo",
      name: "GrupoFornecedores_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 25,
    },
  ],
};
