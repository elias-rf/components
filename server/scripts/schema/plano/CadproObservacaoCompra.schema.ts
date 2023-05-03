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
      size: 16,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "ObservacaoCompra",
      label: "ObservacaoCompra",
      name: "ObservacaoCompra",
      typeField: "string",
      size: 7680,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
