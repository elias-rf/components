import { TTable } from "../../../../types/model";

export const ParametroIntegracao: TTable = {
  database: "plano",
  table: "ParametroIntegracao",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "ParametroIntegracao_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "SMTPServer",
      label: "SMTPServer",
      name: "SMTPServer",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "POP3Server",
      label: "POP3Server",
      name: "POP3Server",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "NomeRemetente",
      label: "NomeRemetente",
      name: "NomeRemetente",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "EnderecoRemetente",
      label: "EnderecoRemetente",
      name: "EnderecoRemetente",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "NomeUsuario",
      label: "NomeUsuario",
      name: "NomeUsuario",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "SenhaUsuario",
      label: "SenhaUsuario",
      name: "SenhaUsuario",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "IntExecucao",
      label: "IntExecucao",
      name: "IntExecucao",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TpIntExecucao",
      label: "TpIntExecucao",
      name: "TpIntExecucao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "IntSelecao",
      label: "IntSelecao",
      name: "IntSelecao",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TpIntSelecao",
      label: "TpIntSelecao",
      name: "TpIntSelecao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgConexaocomAutenticacao",
      label: "FgConexaocomAutenticacao",
      name: "FgConexaocomAutenticacao",
      typeField: "string",
      size: 1,
    },
  ],
};
