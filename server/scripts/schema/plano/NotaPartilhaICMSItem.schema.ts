import { TTableDef } from "@/types/model";

export const NotaPartilhaICMSItem: TTableDef = {
  database: "plano",
  table: "NotaPartilhaICMSItem",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

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
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
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
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

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
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlBaseCalculoICMS",
      label: "VlBaseCalculoICMS",
      name: "VlBaseCalculoICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercICMSOperacao",
      label: "PercICMSOperacao",
      name: "PercICMSOperacao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercICMSDestino",
      label: "PercICMSDestino",
      name: "PercICMSDestino",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercPartilha",
      label: "PercPartilha",
      name: "PercPartilha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMSUFOrigem",
      label: "VlICMSUFOrigem",
      name: "VlICMSUFOrigem",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMSUFDestino",
      label: "VlICMSUFDestino",
      name: "VlICMSUFDestino",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercCombatePobrezaDestino",
      label: "PercCombatePobrezaDestino",
      name: "PercCombatePobrezaDestino",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCombatePobrezaDestino",
      label: "VlCombatePobrezaDestino",
      name: "VlCombatePobrezaDestino",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
