import { TTableDef } from "@/types/model";

export const MovimentoSerie: TTableDef = {
  database: "plano",
  table: "MovimentoSerie",
  fields: [
    {
      field: "CdEmitente",
      label: "CdEmitente",
      name: "CdEmitente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtMovimento",
      label: "DtMovimento",
      name: "DtMovimento",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Finalidade",
      label: "Finalidade",
      name: "Finalidade",
      typeField: "string",
    },
    {
      field: "HrMovimento",
      label: "HrMovimento",
      name: "HrMovimento",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumSerieProduto",
      label: "NumSerieProduto",
      name: "NumSerieProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoEmitente",
      label: "TipoEmitente",
      name: "TipoEmitente",
      typeField: "string",
    },
    {
      field: "TipoMovimento",
      label: "TipoMovimento",
      name: "TipoMovimento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
  ],
};
