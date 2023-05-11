import { TTableDef } from "@/types/model";

export const NotaPartilhaICMSMestre: TTableDef = {
  database: "plano",
  table: "NotaPartilhaICMSMestre",
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
      field: "VlBaseCalculoICMS",
      label: "VlBaseCalculoICMS",
      name: "VlBaseCalculoICMS",
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
      field: "VlCombatePobrezaDestino",
      label: "VlCombatePobrezaDestino",
      name: "VlCombatePobrezaDestino",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
