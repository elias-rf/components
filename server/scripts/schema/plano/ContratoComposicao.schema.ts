import { TTableDef } from "@/types/model";

export const ContratoComposicao: TTableDef = {
  database: "plano",
  table: "ContratoComposicao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DiaContrato",
      label: "DiaContrato",
      name: "DiaContrato",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdClienteInstalacao",
      label: "CdClienteInstalacao",
      name: "CdClienteInstalacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtInstalacao",
      label: "DtInstalacao",
      name: "DtInstalacao",
      typeField: "datetime",

      scale: 3,
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
      field: "VlUnitario",
      label: "VlUnitario",
      name: "VlUnitario",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtUltReajuste",
      label: "DtUltReajuste",
      name: "DtUltReajuste",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "VlAnterior",
      label: "VlAnterior",
      name: "VlAnterior",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
