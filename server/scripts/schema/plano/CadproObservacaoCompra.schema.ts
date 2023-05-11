import { TTableDef } from "@/types/model";

export const CadproObservacaoCompra: TTableDef = {
  database: "plano",
  table: "CadproObservacaoCompra",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CadproObservacaoCompra_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "ObservacaoCompra",
      label: "ObservacaoCompra",
      name: "ObservacaoCompra",
      typeField: "string",

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
  ],
};
