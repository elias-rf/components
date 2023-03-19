import { TTableDef } from "../../../../types/model";

export const NotaPartilhaICMSItem: TTableDef = {
  database: "plano",
  table: "NotaPartilhaICMSItem",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoICMS",
      label: "VlBaseCalculoICMS",
      name: "VlBaseCalculoICMS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercICMSOperacao",
      label: "PercICMSOperacao",
      name: "PercICMSOperacao",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercICMSDestino",
      label: "PercICMSDestino",
      name: "PercICMSDestino",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercPartilha",
      label: "PercPartilha",
      name: "PercPartilha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMSUFOrigem",
      label: "VlICMSUFOrigem",
      name: "VlICMSUFOrigem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMSUFDestino",
      label: "VlICMSUFDestino",
      name: "VlICMSUFDestino",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercCombatePobrezaDestino",
      label: "PercCombatePobrezaDestino",
      name: "PercCombatePobrezaDestino",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCombatePobrezaDestino",
      label: "VlCombatePobrezaDestino",
      name: "VlCombatePobrezaDestino",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
