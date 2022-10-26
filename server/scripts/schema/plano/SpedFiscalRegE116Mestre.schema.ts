import { TEntity } from "../../../../types";

export const SpedFiscalRegE116Mestre: TEntity = {
  database: "plano",
  table: "SpedFiscalRegE116Mestre",
  schema: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "CdObrigacaoRecolher",
      label: "CdObrigacaoRecolher",
      name: "CdObrigacaoRecolher",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdReceita",
      label: "CdReceita",
      name: "CdReceita",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "VlObrigacaoRecolher",
      label: "VlObrigacaoRecolher",
      name: "VlObrigacaoRecolher",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtVencimento",
      label: "DtVencimento",
      name: "DtVencimento",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};