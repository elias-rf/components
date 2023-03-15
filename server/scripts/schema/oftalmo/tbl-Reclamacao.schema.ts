import { TTable } from "../../../../types/model";

export const tbl_Reclamacao: TTable = {
  database: "oftalmo",
  table: "tbl_Reclamacao",
  fields: [
    {
      field: "kReclamacao",
      label: "kReclamacao",
      name: "tbl_Reclamacao_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkCliente",
      label: "fkCliente",
      name: "fkCliente",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "TipoReclamacao",
      label: "TipoReclamacao",
      name: "TipoReclamacao",
      typeField: "string",
      size: 50,
    },
    {
      field: "Assunto",
      label: "Assunto",
      name: "Assunto",
      typeField: "string",
      size: 200,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 16,
    },
    {
      field: "DataDescricao",
      label: "DataDescricao",
      name: "DataDescricao",
      typeField: "date",
      size: 4,
    },
    {
      field: "UsuarioDescricao",
      label: "UsuarioDescricao",
      name: "UsuarioDescricao",
      typeField: "string",
      size: 50,
    },
    {
      field: "Analise",
      label: "Analise",
      name: "Analise",
      typeField: "string",
      size: 16,
    },
    {
      field: "DataAnalise",
      label: "DataAnalise",
      name: "DataAnalise",
      typeField: "date",
      size: 4,
    },
    {
      field: "UsuarioAnalise",
      label: "UsuarioAnalise",
      name: "UsuarioAnalise",
      typeField: "string",
      size: 50,
    },
    {
      field: "Solucao",
      label: "Solucao",
      name: "Solucao",
      typeField: "string",
      size: 16,
    },
    {
      field: "DataSolucao",
      label: "DataSolucao",
      name: "DataSolucao",
      typeField: "date",
      size: 4,
    },
    {
      field: "UsuarioSolucao",
      label: "UsuarioSolucao",
      name: "UsuarioSolucao",
      typeField: "string",
      size: 50,
    },
    {
      field: "Verificacao",
      label: "Verificacao",
      name: "Verificacao",
      typeField: "string",
      size: 16,
    },
    {
      field: "DataVerificacao",
      label: "DataVerificacao",
      name: "DataVerificacao",
      typeField: "date",
      size: 4,
    },
    {
      field: "UsuarioVerificacao",
      label: "UsuarioVerificacao",
      name: "UsuarioVerificacao",
      typeField: "string",
      size: 50,
    },
    {
      field: "Causa",
      label: "Causa",
      name: "Causa",
      typeField: "string",
      size: 50,
    },
    {
      field: "EmailNotif",
      label: "EmailNotif",
      name: "EmailNotif",
      typeField: "int",
      size: 1,
    },
  ],
};
