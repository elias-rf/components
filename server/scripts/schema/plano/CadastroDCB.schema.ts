import { TTableDef } from "@/types/model";

export const CadastroDCB: TTableDef = {
  database: "plano",
  table: "CadastroDCB",
  fields: [
    {
      field: "CdDCB",
      label: "CdDCB",
      name: "CadastroDCB_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescricaoDCB",
      label: "DescricaoDCB",
      name: "DescricaoDCB",
      typeField: "string",
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
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
