import { TTableDef } from "@/types/model";

export const ConfiguracaoWMS: TTableDef = {
  database: "plano",
  table: "ConfiguracaoWMS",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "ConfiguracaoWMS_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgGeraRemessaPedidos",
      label: "FgGeraRemessaPedidos",
      name: "FgGeraRemessaPedidos",
      typeField: "string",
    },
    {
      field: "FgGeraRemessaRecebimento",
      label: "FgGeraRemessaRecebimento",
      name: "FgGeraRemessaRecebimento",
      typeField: "string",
    },
    {
      field: "FgGeraRemessaProdutos",
      label: "FgGeraRemessaProdutos",
      name: "FgGeraRemessaProdutos",
      typeField: "string",
    },
    {
      field: "CaminhoProdutos",
      label: "CaminhoProdutos",
      name: "CaminhoProdutos",
      typeField: "string",
    },
    {
      field: "CaminhoFornecedores",
      label: "CaminhoFornecedores",
      name: "CaminhoFornecedores",
      typeField: "string",
    },
    {
      field: "CaminhoRecebimento",
      label: "CaminhoRecebimento",
      name: "CaminhoRecebimento",
      typeField: "string",
    },
    {
      field: "CaminhoPedidos",
      label: "CaminhoPedidos",
      name: "CaminhoPedidos",
      typeField: "string",
    },
    {
      field: "CaminhoLeituraPedidos",
      label: "CaminhoLeituraPedidos",
      name: "CaminhoLeituraPedidos",
      typeField: "string",
    },
  ],
};
