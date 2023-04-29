import { TTableDef } from "@mono/types/model";

export const NotaPartilhaICMSMestre: TTableDef = {
  database: "plano",
  table: "NotaPartilhaICMSMestre",
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
      field: "VlBaseCalculoICMS",
      label: "VlBaseCalculoICMS",
      name: "VlBaseCalculoICMS",
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
