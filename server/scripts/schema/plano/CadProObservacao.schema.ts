import { TTableDef } from "@/types/model";

export const CadProObservacao: TTableDef = {
  database: "plano",
  table: "CadProObservacao",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CadProObservacao_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
    },
  ],
};
