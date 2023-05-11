import { TTableDef } from "@/types/model";

export const TributacaoEstados: TTableDef = {
  database: "plano",
  table: "TributacaoEstados",
  fields: [
    {
      field: "UfOrigem",
      label: "UfOrigem",
      name: "UfOrigem",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "UfDestino",
      label: "UfDestino",
      name: "UfDestino",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliqICMSEntrada",
      label: "AliqICMSEntrada",
      name: "AliqICMSEntrada",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ReducaoICMSEntrada",
      label: "ReducaoICMSEntrada",
      name: "ReducaoICMSEntrada",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliqICMSSaidaContribuinte",
      label: "AliqICMSSaidaContribuinte",
      name: "AliqICMSSaidaContribuinte",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ReducaoICMSSaidaContribuinte",
      label: "ReducaoICMSSaidaContribuinte",
      name: "ReducaoICMSSaidaContribuinte",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliqICMSSaidaContribuinteSimples",
      label: "AliqICMSSaidaContribuinteSimples",
      name: "AliqICMSSaidaContribuinteSimples",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ReducaoICMSSaidaContribuinteSimples",
      label: "ReducaoICMSSaidaContribuinteSimples",
      name: "ReducaoICMSSaidaContribuinteSimples",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliqICMSSaidaNaoContribuinte",
      label: "AliqICMSSaidaNaoContribuinte",
      name: "AliqICMSSaidaNaoContribuinte",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ReducaoICMSSaidaNaoContribuinte",
      label: "ReducaoICMSSaidaNaoContribuinte",
      name: "ReducaoICMSSaidaNaoContribuinte",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "AliqICMSSaidaNaoContribuinteSimples",
      label: "AliqICMSSaidaNaoContribuinteSimples",
      name: "AliqICMSSaidaNaoContribuinteSimples",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ReducaoICMSSaidaNaoContribuinteSimples",
      label: "ReducaoICMSSaidaNaoContribuinteSimples",
      name: "ReducaoICMSSaidaNaoContribuinteSimples",
      typeField: "float",

      scale: 4,
    },
  ],
};
