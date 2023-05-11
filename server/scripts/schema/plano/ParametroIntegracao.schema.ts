import { TTableDef } from "@/types/model";

export const ParametroIntegracao: TTableDef = {
  database: "plano",
  table: "ParametroIntegracao",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "ParametroIntegracao_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "SMTPServer",
      label: "SMTPServer",
      name: "SMTPServer",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "POP3Server",
      label: "POP3Server",
      name: "POP3Server",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NomeRemetente",
      label: "NomeRemetente",
      name: "NomeRemetente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "EnderecoRemetente",
      label: "EnderecoRemetente",
      name: "EnderecoRemetente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NomeUsuario",
      label: "NomeUsuario",
      name: "NomeUsuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SenhaUsuario",
      label: "SenhaUsuario",
      name: "SenhaUsuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "IntExecucao",
      label: "IntExecucao",
      name: "IntExecucao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TpIntExecucao",
      label: "TpIntExecucao",
      name: "TpIntExecucao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "IntSelecao",
      label: "IntSelecao",
      name: "IntSelecao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TpIntSelecao",
      label: "TpIntSelecao",
      name: "TpIntSelecao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgConexaocomAutenticacao",
      label: "FgConexaocomAutenticacao",
      name: "FgConexaocomAutenticacao",
      typeField: "string",
    },
  ],
};
