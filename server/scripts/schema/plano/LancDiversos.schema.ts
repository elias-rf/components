import { TEntity } from "../../../../types";

export const LancDiversos: TEntity = {
  database: "plano",
  table: "LancDiversos",
  schema: [
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "TxFinalidade",
      label: "TxFinalidade",
      name: "TxFinalidade",
      type: "string",
      size: 1024,
    },
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      type: "string",
      size: 12,
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
      field: "NumLcto",
      label: "NumLcto",
      name: "NumLcto",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdTpAplicacao",
      label: "CdTpAplicacao",
      name: "CdTpAplicacao",
      type: "int",
      size: 4,
    },
    {
      field: "VlValor",
      label: "VlValor",
      name: "VlValor",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "TxTipLcto",
      label: "TxTipLcto",
      name: "TxTipLcto",
      type: "string",
      size: 1,
    },
    {
      field: "CdFilialAssociada",
      label: "CdFilialAssociada",
      name: "CdFilialAssociada",
      type: "int",
      size: 4,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      type: "string",
      size: 1,
    },
    {
      field: "CdContabil",
      label: "CdContabil",
      name: "CdContabil",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdBancoDestino",
      label: "CdBancoDestino",
      name: "CdBancoDestino",
      type: "int",
      size: 2,
    },
    {
      field: "NumContaDestino",
      label: "NumContaDestino",
      name: "NumContaDestino",
      type: "string",
      size: 16,
    },
    {
      field: "NumLctoDestino",
      label: "NumLctoDestino",
      name: "NumLctoDestino",
      type: "int",
      size: 4,
    },
    {
      field: "CdAgenciaDestino",
      label: "CdAgenciaDestino",
      name: "CdAgenciaDestino",
      type: "int",
      size: 2,
    },
  ],
};
