import { TTableDef } from "@/types/model";

export const ExcMP: TTableDef = {
  database: "plano",
  table: "ExcMP",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NroPDV",
      label: "NroPDV",
      name: "NroPDV",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      typeField: "int",

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
      field: "CdTipoVenda",
      label: "CdTipoVenda",
      name: "CdTipoVenda",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtReal",
      label: "DtReal",
      name: "DtReal",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Horario",
      label: "Horario",
      name: "Horario",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdCaixa",
      label: "CdCaixa",
      name: "CdCaixa",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdFuncionario",
      label: "CdFuncionario",
      name: "CdFuncionario",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDescGer",
      label: "VlDescGer",
      name: "VlDescGer",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CupomRef",
      label: "CupomRef",
      name: "CupomRef",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumCRM",
      label: "NumCRM",
      name: "NumCRM",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
