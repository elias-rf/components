import { TTableDef } from "@mono/types/model";

export const SpedFiscalRegE116Processo: TTableDef = {
  database: "plano",
  table: "SpedFiscalRegE116Processo",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "CdObrigacaoRecolher",
      label: "CdObrigacaoRecolher",
      name: "CdObrigacaoRecolher",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdReceita",
      label: "CdReceita",
      name: "CdReceita",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "CdIndicadorOrigem",
      label: "CdIndicadorOrigem",
      name: "CdIndicadorOrigem",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "NumProcesso",
      label: "NumProcesso",
      name: "NumProcesso",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "DescricaoProcesso",
      label: "DescricaoProcesso",
      name: "DescricaoProcesso",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "DescricaoComplementarProcesso",
      label: "DescricaoComplementarProcesso",
      name: "DescricaoComplementarProcesso",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
