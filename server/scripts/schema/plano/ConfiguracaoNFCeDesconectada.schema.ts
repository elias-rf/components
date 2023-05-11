import { TTableDef } from "@/types/model";

export const ConfiguracaoNFCeDesconectada: TTableDef = {
  database: "plano",
  table: "ConfiguracaoNFCeDesconectada",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DiretorioMovimento",
      label: "DiretorioMovimento",
      name: "DiretorioMovimento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DiretorioResultado",
      label: "DiretorioResultado",
      name: "DiretorioResultado",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DiretorioProcNFe",
      label: "DiretorioProcNFe",
      name: "DiretorioProcNFe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "RetaguardaServidor",
      label: "RetaguardaServidor",
      name: "RetaguardaServidor",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "RetaguardaUsuario",
      label: "RetaguardaUsuario",
      name: "RetaguardaUsuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "RetaguardaSenha",
      label: "RetaguardaSenha",
      name: "RetaguardaSenha",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "RetaguardaBancoDados",
      label: "RetaguardaBancoDados",
      name: "RetaguardaBancoDados",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "IntervaloSincronizacao",
      label: "IntervaloSincronizacao",
      name: "IntervaloSincronizacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgTabelasNotas",
      label: "FgTabelasNotas",
      name: "FgTabelasNotas",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgTabelasCaixa",
      label: "FgTabelasCaixa",
      name: "FgTabelasCaixa",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgTabelaPedidos",
      label: "FgTabelaPedidos",
      name: "FgTabelaPedidos",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgTabelasContasReceber",
      label: "FgTabelasContasReceber",
      name: "FgTabelasContasReceber",
      typeField: "string",

      allowNull: false,
    },
  ],
};
