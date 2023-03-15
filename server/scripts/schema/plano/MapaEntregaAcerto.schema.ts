import { TTable } from "../../../../types/model";

export const MapaEntregaAcerto: TTable = {
  database: "plano",
  table: "MapaEntregaAcerto",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumMapa",
      label: "NumMapa",
      name: "NumMapa",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDinheiro",
      label: "VlDinheiro",
      name: "VlDinheiro",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCheque",
      label: "VlCheque",
      name: "VlCheque",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlChequePre",
      label: "VlChequePre",
      name: "VlChequePre",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCartao",
      label: "VlCartao",
      name: "VlCartao",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDebito",
      label: "VlDebito",
      name: "VlDebito",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCrediario",
      label: "VlCrediario",
      name: "VlCrediario",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDevolucoes",
      label: "VlDevolucoes",
      name: "VlDevolucoes",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAntecipado",
      label: "VlAntecipado",
      name: "VlAntecipado",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlRetorno",
      label: "VlRetorno",
      name: "VlRetorno",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
