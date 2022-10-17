import { TEntity } from "../../../../types";

export const CustoMedio: TEntity = {
  database: "plano",
  table: "CustoMedio",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "DtRef",
      label: "DtRef",
      name: "DtRef",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "QtdeAnterior",
      label: "QtdeAnterior",
      name: "QtdeAnterior",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlCustoMedioAnterior",
      label: "VlCustoMedioAnterior",
      name: "VlCustoMedioAnterior",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      type: "int",
      size: 4,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      type: "string",
      size: 3,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "QtdeEntrada",
      label: "QtdeEntrada",
      name: "QtdeEntrada",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlCustoEntrada",
      label: "VlCustoEntrada",
      name: "VlCustoEntrada",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "QtdeSaldo",
      label: "QtdeSaldo",
      name: "QtdeSaldo",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlCustoMedio",
      label: "VlCustoMedio",
      name: "VlCustoMedio",
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
    {
      field: "TipoEmitente",
      label: "TipoEmitente",
      name: "TipoEmitente",
      type: "string",
      size: 1,
    },
  ],
};
