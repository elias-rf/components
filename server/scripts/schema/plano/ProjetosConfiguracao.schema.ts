import { TTableDef } from "../../../../types/model";

export const ProjetosConfiguracao: TTableDef = {
  database: "plano",
  table: "ProjetosConfiguracao",
  fields: [
    {
      field: "CdProjetosConfiguracao",
      label: "CdProjetosConfiguracao",
      name: "ProjetosConfiguracao_id",
      typeField: "int",
      size: 9,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdProjeto",
      label: "CdProjeto",
      name: "CdProjeto",
      typeField: "int",
      size: 9,
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
      field: "QtdeProduto",
      label: "QtdeProduto",
      name: "QtdeProduto",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercQtde",
      label: "PercQtde",
      name: "PercQtde",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
      typeField: "string",
      size: 15,
    },
    {
      field: "PercCRM",
      label: "PercCRM",
      name: "PercCRM",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};
