import { TTableDef } from "@/types/model";

export const Exames: TTableDef = {
  database: "plano",
  table: "Exames",
  fields: [
    {
      field: "CdExame",
      label: "CdExame",
      name: "Exames_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
    {
      field: "Unidade",
      label: "Unidade",
      name: "Unidade",
      typeField: "string",
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
  ],
};
