import { TTableDef } from "@/types/model";

export const AssocFornecedor: TTableDef = {
  database: "plano",
  table: "AssocFornecedor",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdReferencia",
      label: "CdReferencia",
      name: "CdReferencia",
      typeField: "string",
    },
    {
      field: "QtdEmbalagem",
      label: "QtdEmbalagem",
      name: "QtdEmbalagem",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtPriCompra",
      label: "DtPriCompra",
      name: "DtPriCompra",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtUltCompra",
      label: "DtUltCompra",
      name: "DtUltCompra",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "NroNf",
      label: "NroNf",
      name: "NroNf",
      typeField: "int",
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
    },
  ],
};
