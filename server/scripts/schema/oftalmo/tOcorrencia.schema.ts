import { TTableDef } from "@/types/model";

export const tOcorrencia: TTableDef = {
  database: "oftalmo",
  table: "tOcorrencia",
  fields: [
    {
      field: "kOcorrencia",
      label: "kOcorrencia",
      name: "tOcorrencia_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "TipoOcorrencia",
      label: "TipoOcorrencia",
      name: "TipoOcorrencia",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "OrigemOcorrencia",
      label: "OrigemOcorrencia",
      name: "OrigemOcorrencia",
      typeField: "string",

      allowNull: false,
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
      field: "PrazoImplemSolucao",
      label: "PrazoImplemSolucao",
      name: "PrazoImplemSolucao",
      typeField: "date",
    },
    {
      field: "DataImplemSolucao",
      label: "DataImplemSolucao",
      name: "DataImplemSolucao",
      typeField: "date",
    },
    {
      field: "UsuarioImplemSolucao",
      label: "UsuarioImplemSolucao",
      name: "UsuarioImplemSolucao",
      typeField: "string",
    },
    {
      field: "AcaoPreventiva",
      label: "AcaoPreventiva",
      name: "AcaoPreventiva",
      typeField: "string",
    },
    {
      field: "DataAcao",
      label: "DataAcao",
      name: "DataAcao",
      typeField: "date",
    },
    {
      field: "UsuarioAcao",
      label: "UsuarioAcao",
      name: "UsuarioAcao",
      typeField: "string",
    },
    {
      field: "PrazoImplemAcao",
      label: "PrazoImplemAcao",
      name: "PrazoImplemAcao",
      typeField: "date",
    },
    {
      field: "DataImplemAcao",
      label: "DataImplemAcao",
      name: "DataImplemAcao",
      typeField: "date",
    },
    {
      field: "UsuarioImplemAcao",
      label: "UsuarioImplemAcao",
      name: "UsuarioImplemAcao",
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
  ],
};
