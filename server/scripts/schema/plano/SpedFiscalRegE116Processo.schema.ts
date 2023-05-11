import { TTableDef } from "@/types/model";

export const SpedFiscalRegE116Processo: TTableDef = {
  database: "plano",
  table: "SpedFiscalRegE116Processo",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "CdObrigacaoRecolher",
      label: "CdObrigacaoRecolher",
      name: "CdObrigacaoRecolher",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdReceita",
      label: "CdReceita",
      name: "CdReceita",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdIndicadorOrigem",
      label: "CdIndicadorOrigem",
      name: "CdIndicadorOrigem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumProcesso",
      label: "NumProcesso",
      name: "NumProcesso",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DescricaoProcesso",
      label: "DescricaoProcesso",
      name: "DescricaoProcesso",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DescricaoComplementarProcesso",
      label: "DescricaoComplementarProcesso",
      name: "DescricaoComplementarProcesso",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
