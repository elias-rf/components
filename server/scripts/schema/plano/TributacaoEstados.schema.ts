import { TTable } from "../../../../types/model";

export const TributacaoEstados: TTable = {
  database: "plano",
  table: "TributacaoEstados",
  fields: [
    {
      field: "UfOrigem",
      label: "UfOrigem",
      name: "UfOrigem",
      typeField: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "UfDestino",
      label: "UfDestino",
      name: "UfDestino",
      typeField: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "AliqICMSEntrada",
      label: "AliqICMSEntrada",
      name: "AliqICMSEntrada",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ReducaoICMSEntrada",
      label: "ReducaoICMSEntrada",
      name: "ReducaoICMSEntrada",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliqICMSSaidaContribuinte",
      label: "AliqICMSSaidaContribuinte",
      name: "AliqICMSSaidaContribuinte",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ReducaoICMSSaidaContribuinte",
      label: "ReducaoICMSSaidaContribuinte",
      name: "ReducaoICMSSaidaContribuinte",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliqICMSSaidaContribuinteSimples",
      label: "AliqICMSSaidaContribuinteSimples",
      name: "AliqICMSSaidaContribuinteSimples",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ReducaoICMSSaidaContribuinteSimples",
      label: "ReducaoICMSSaidaContribuinteSimples",
      name: "ReducaoICMSSaidaContribuinteSimples",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliqICMSSaidaNaoContribuinte",
      label: "AliqICMSSaidaNaoContribuinte",
      name: "AliqICMSSaidaNaoContribuinte",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ReducaoICMSSaidaNaoContribuinte",
      label: "ReducaoICMSSaidaNaoContribuinte",
      name: "ReducaoICMSSaidaNaoContribuinte",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "AliqICMSSaidaNaoContribuinteSimples",
      label: "AliqICMSSaidaNaoContribuinteSimples",
      name: "AliqICMSSaidaNaoContribuinteSimples",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "ReducaoICMSSaidaNaoContribuinteSimples",
      label: "ReducaoICMSSaidaNaoContribuinteSimples",
      name: "ReducaoICMSSaidaNaoContribuinteSimples",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};
