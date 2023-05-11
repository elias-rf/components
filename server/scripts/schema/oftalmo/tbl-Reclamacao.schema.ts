import { TTableDef } from "@/types/model";

export const tbl_Reclamacao: TTableDef = {
  database: "oftalmo",
  table: "tbl_Reclamacao",
  fields: [
    {
      field: "kReclamacao",
      label: "kReclamacao",
      name: "tbl_Reclamacao_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkCliente",
      label: "fkCliente",
      name: "fkCliente",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoReclamacao",
      label: "TipoReclamacao",
      name: "TipoReclamacao",
      typeField: "string",
    },
    {
      field: "Assunto",
      label: "Assunto",
      name: "Assunto",
      typeField: "string",
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
    {
      field: "DataDescricao",
      label: "DataDescricao",
      name: "DataDescricao",
      typeField: "date",
    },
    {
      field: "UsuarioDescricao",
      label: "UsuarioDescricao",
      name: "UsuarioDescricao",
      typeField: "string",
    },
    {
      field: "Analise",
      label: "Analise",
      name: "Analise",
      typeField: "string",
    },
    {
      field: "DataAnalise",
      label: "DataAnalise",
      name: "DataAnalise",
      typeField: "date",
    },
    {
      field: "UsuarioAnalise",
      label: "UsuarioAnalise",
      name: "UsuarioAnalise",
      typeField: "string",
    },
    {
      field: "Solucao",
      label: "Solucao",
      name: "Solucao",
      typeField: "string",
    },
    {
      field: "DataSolucao",
      label: "DataSolucao",
      name: "DataSolucao",
      typeField: "date",
    },
    {
      field: "UsuarioSolucao",
      label: "UsuarioSolucao",
      name: "UsuarioSolucao",
      typeField: "string",
    },
    {
      field: "Verificacao",
      label: "Verificacao",
      name: "Verificacao",
      typeField: "string",
    },
    {
      field: "DataVerificacao",
      label: "DataVerificacao",
      name: "DataVerificacao",
      typeField: "date",
    },
    {
      field: "UsuarioVerificacao",
      label: "UsuarioVerificacao",
      name: "UsuarioVerificacao",
      typeField: "string",
    },
    {
      field: "Causa",
      label: "Causa",
      name: "Causa",
      typeField: "string",
    },
    {
      field: "EmailNotif",
      label: "EmailNotif",
      name: "EmailNotif",
      typeField: "int",
    },
  ],
};
