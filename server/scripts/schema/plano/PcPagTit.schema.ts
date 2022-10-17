import { TEntity } from "../../../../types";

export const PcPagTit: TEntity = {
  database: "plano",
  table: "PcPagTit",
  fields: [
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      type: "int",
      size: 4,
    },
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      type: "int",
      size: 4,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "DaPagto",
      label: "DaPagto",
      name: "DaPagto",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "ItemDoc",
      label: "ItemDoc",
      name: "ItemDoc",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NossoNumero",
      label: "NossoNumero",
      name: "NossoNumero",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NrDoc",
      label: "NrDoc",
      name: "NrDoc",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      type: "string",
      size: 12,
    },
    {
      field: "NumLcto",
      label: "NumLcto",
      name: "NumLcto",
      type: "int",
      size: 4,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "SiglaDoc",
      label: "SiglaDoc",
      name: "SiglaDoc",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "VlAmortizado",
      label: "VlAmortizado",
      name: "VlAmortizado",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlJuros",
      label: "VlJuros",
      name: "VlJuros",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlPagto",
      label: "VlPagto",
      name: "VlPagto",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlTarifa",
      label: "VlTarifa",
      name: "VlTarifa",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      type: "string",
      size: 3,
      allowNull: false,
    },
  ],
};
