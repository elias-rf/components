import { TTableDef } from "@/types/model";

export const SpedFiscalRegE116Mestre: TTableDef = {
  database: "plano",
  table: "SpedFiscalRegE116Mestre",
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
      field: "VlObrigacaoRecolher",
      label: "VlObrigacaoRecolher",
      name: "VlObrigacaoRecolher",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtVencimento",
      label: "DtVencimento",
      name: "DtVencimento",
      typeField: "datetime",

      scale: 3,
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
