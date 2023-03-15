import { TTable } from "../../../../types/model";

export const BancoContaCorrente: TTable = {
  database: "plano",
  table: "BancoContaCorrente",
  fields: [
    {
      field: "NumBanco",
      label: "NumBanco",
      name: "NumBanco",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "NumAgencia",
      label: "NumAgencia",
      name: "NumAgencia",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "NumContaCorrente",
      label: "NumContaCorrente",
      name: "NumContaCorrente",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "NmTitular",
      label: "NmTitular",
      name: "NmTitular",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "SubConta",
      label: "SubConta",
      name: "SubConta",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "DVConta",
      label: "DVConta",
      name: "DVConta",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "DVAgenciaConta",
      label: "DVAgenciaConta",
      name: "DVAgenciaConta",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "NumConvenio",
      label: "NumConvenio",
      name: "NumConvenio",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "NumContratoCaucao",
      label: "NumContratoCaucao",
      name: "NumContratoCaucao",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "SiglaEmpresa",
      label: "SiglaEmpresa",
      name: "SiglaEmpresa",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "IdEmpresa",
      label: "IdEmpresa",
      name: "IdEmpresa",
      typeField: "string",
      size: 32,
    },
    {
      field: "NumCarteira",
      label: "NumCarteira",
      name: "NumCarteira",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdFilialAssociada",
      label: "CdFilialAssociada",
      name: "CdFilialAssociada",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "DtUltFechamento",
      label: "DtUltFechamento",
      name: "DtUltFechamento",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "ComplementoConta",
      label: "ComplementoConta",
      name: "ComplementoConta",
      typeField: "string",
      size: 3,
    },
    {
      field: "FgCaixa",
      label: "FgCaixa",
      name: "FgCaixa",
      typeField: "string",
      size: 1,
    },
    {
      field: "NumRemessa",
      label: "NumRemessa",
      name: "NumRemessa",
      typeField: "int",
      size: 5,
    },
    {
      field: "DVContratoCaucao",
      label: "DVContratoCaucao",
      name: "DVContratoCaucao",
      typeField: "string",
      size: 1,
    },
    {
      field: "BorderoCobranca",
      label: "BorderoCobranca",
      name: "BorderoCobranca",
      typeField: "int",
      size: 5,
    },
    {
      field: "FgHomologacao",
      label: "FgHomologacao",
      name: "FgHomologacao",
      typeField: "string",
      size: 1,
    },
    {
      field: "NumVariacaoCarteira",
      label: "NumVariacaoCarteira",
      name: "NumVariacaoCarteira",
      typeField: "int",
      size: 5,
    },
  ],
};
