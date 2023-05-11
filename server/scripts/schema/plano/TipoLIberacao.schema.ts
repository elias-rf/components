import { TTableDef } from "@/types/model";

export const TipoLIberacao: TTableDef = {
  database: "plano",
  table: "TipoLIberacao",
  fields: [
    {
      field: "CdTipoLiberacao",
      label: "CdTipoLiberacao",
      name: "TipoLIberacao_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
