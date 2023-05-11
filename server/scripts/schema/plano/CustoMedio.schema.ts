import { TTableDef } from "@/types/model";

export const CustoMedio: TTableDef = {
  database: "plano",
  table: "CustoMedio",
  fields: [
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
      field: "DtRef",
      label: "DtRef",
      name: "DtRef",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdeAnterior",
      label: "QtdeAnterior",
      name: "QtdeAnterior",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlCustoMedioAnterior",
      label: "VlCustoMedioAnterior",
      name: "VlCustoMedioAnterior",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",

      scale: 4,
    },
    {
      field: "QtdeEntrada",
      label: "QtdeEntrada",
      name: "QtdeEntrada",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlCustoEntrada",
      label: "VlCustoEntrada",
      name: "VlCustoEntrada",
      typeField: "float",

      scale: 4,
    },
    {
      field: "QtdeSaldo",
      label: "QtdeSaldo",
      name: "QtdeSaldo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlCustoMedio",
      label: "VlCustoMedio",
      name: "VlCustoMedio",
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
    {
      field: "TipoEmitente",
      label: "TipoEmitente",
      name: "TipoEmitente",
      typeField: "string",
    },
  ],
};
