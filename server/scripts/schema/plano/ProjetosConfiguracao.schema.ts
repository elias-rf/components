import { TTableDef } from "@/types/model";

export const ProjetosConfiguracao: TTableDef = {
  database: "plano",
  table: "ProjetosConfiguracao",
  fields: [
    {
      field: "CdProjetosConfiguracao",
      label: "CdProjetosConfiguracao",
      name: "ProjetosConfiguracao_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdProjeto",
      label: "CdProjeto",
      name: "CdProjeto",
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
      field: "QtdeProduto",
      label: "QtdeProduto",
      name: "QtdeProduto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercQtde",
      label: "PercQtde",
      name: "PercQtde",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
      typeField: "string",
    },
    {
      field: "PercCRM",
      label: "PercCRM",
      name: "PercCRM",
      typeField: "float",

      scale: 4,
    },
  ],
};
