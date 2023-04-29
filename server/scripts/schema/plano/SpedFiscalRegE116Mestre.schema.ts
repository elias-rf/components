import { TTableDef } from "@mono/types/model";

export const SpedFiscalRegE116Mestre: TTableDef = {
  database: "plano",
  table: "SpedFiscalRegE116Mestre",
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
      field: "VlObrigacaoRecolher",
      label: "VlObrigacaoRecolher",
      name: "VlObrigacaoRecolher",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtVencimento",
      label: "DtVencimento",
      name: "DtVencimento",
      typeField: "datetime",
      size: 8,
      scale: 3,
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
