import { TTableDef } from "@/types/model";

export const BancoContaCorrente: TTableDef = {
  database: "plano",
  table: "BancoContaCorrente",
  fields: [
    {
      field: "NumBanco",
      label: "NumBanco",
      name: "NumBanco",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumAgencia",
      label: "NumAgencia",
      name: "NumAgencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumContaCorrente",
      label: "NumContaCorrente",
      name: "NumContaCorrente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NmTitular",
      label: "NmTitular",
      name: "NmTitular",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SubConta",
      label: "SubConta",
      name: "SubConta",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DVConta",
      label: "DVConta",
      name: "DVConta",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DVAgenciaConta",
      label: "DVAgenciaConta",
      name: "DVAgenciaConta",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumConvenio",
      label: "NumConvenio",
      name: "NumConvenio",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumContratoCaucao",
      label: "NumContratoCaucao",
      name: "NumContratoCaucao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SiglaEmpresa",
      label: "SiglaEmpresa",
      name: "SiglaEmpresa",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "IdEmpresa",
      label: "IdEmpresa",
      name: "IdEmpresa",
      typeField: "string",
    },
    {
      field: "NumCarteira",
      label: "NumCarteira",
      name: "NumCarteira",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilialAssociada",
      label: "CdFilialAssociada",
      name: "CdFilialAssociada",
      typeField: "int",

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
      field: "DtUltFechamento",
      label: "DtUltFechamento",
      name: "DtUltFechamento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "ComplementoConta",
      label: "ComplementoConta",
      name: "ComplementoConta",
      typeField: "string",
    },
    {
      field: "FgCaixa",
      label: "FgCaixa",
      name: "FgCaixa",
      typeField: "string",
    },
    {
      field: "NumRemessa",
      label: "NumRemessa",
      name: "NumRemessa",
      typeField: "int",
    },
    {
      field: "DVContratoCaucao",
      label: "DVContratoCaucao",
      name: "DVContratoCaucao",
      typeField: "string",
    },
    {
      field: "BorderoCobranca",
      label: "BorderoCobranca",
      name: "BorderoCobranca",
      typeField: "int",
    },
    {
      field: "FgHomologacao",
      label: "FgHomologacao",
      name: "FgHomologacao",
      typeField: "string",
    },
    {
      field: "NumVariacaoCarteira",
      label: "NumVariacaoCarteira",
      name: "NumVariacaoCarteira",
      typeField: "int",
    },
  ],
};
