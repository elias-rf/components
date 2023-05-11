import { TTableDef } from "@/types/model";

export const PcPagTit: TTableDef = {
  database: "plano",
  table: "PcPagTit",
  fields: [
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "int",
    },
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DaPagto",
      label: "DaPagto",
      name: "DaPagto",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "ItemDoc",
      label: "ItemDoc",
      name: "ItemDoc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NossoNumero",
      label: "NossoNumero",
      name: "NossoNumero",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NrDoc",
      label: "NrDoc",
      name: "NrDoc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "string",
    },
    {
      field: "NumLcto",
      label: "NumLcto",
      name: "NumLcto",
      typeField: "int",
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SiglaDoc",
      label: "SiglaDoc",
      name: "SiglaDoc",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlAmortizado",
      label: "VlAmortizado",
      name: "VlAmortizado",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlJuros",
      label: "VlJuros",
      name: "VlJuros",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlPagto",
      label: "VlPagto",
      name: "VlPagto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlTarifa",
      label: "VlTarifa",
      name: "VlTarifa",
      typeField: "float",

      scale: 4,
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
