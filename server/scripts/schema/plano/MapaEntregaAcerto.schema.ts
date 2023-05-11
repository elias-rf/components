import { TTableDef } from "@/types/model";

export const MapaEntregaAcerto: TTableDef = {
  database: "plano",
  table: "MapaEntregaAcerto",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumMapa",
      label: "NumMapa",
      name: "NumMapa",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDinheiro",
      label: "VlDinheiro",
      name: "VlDinheiro",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCheque",
      label: "VlCheque",
      name: "VlCheque",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlChequePre",
      label: "VlChequePre",
      name: "VlChequePre",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCartao",
      label: "VlCartao",
      name: "VlCartao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDebito",
      label: "VlDebito",
      name: "VlDebito",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCrediario",
      label: "VlCrediario",
      name: "VlCrediario",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDevolucoes",
      label: "VlDevolucoes",
      name: "VlDevolucoes",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAntecipado",
      label: "VlAntecipado",
      name: "VlAntecipado",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlRetorno",
      label: "VlRetorno",
      name: "VlRetorno",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
