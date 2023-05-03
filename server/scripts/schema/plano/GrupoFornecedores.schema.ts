import { TTableDef } from "@/types/model";

export const GrupoFornecedores: TTableDef = {
  database: "plano",
  table: "GrupoFornecedores",
  fields: [
    {
      field: "CdGrupo",
      label: "CdGrupo",
      name: "GrupoFornecedores_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 25,
    },
  ],
};
