import { TTableDef } from "@/types/model";

export const LancDiversos: TTableDef = {
  database: "plano",
  table: "LancDiversos",
  fields: [
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "TxFinalidade",
      label: "TxFinalidade",
      name: "TxFinalidade",
      typeField: "string",
    },
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "string",

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
      field: "NumLcto",
      label: "NumLcto",
      name: "NumLcto",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdTpAplicacao",
      label: "CdTpAplicacao",
      name: "CdTpAplicacao",
      typeField: "int",
    },
    {
      field: "VlValor",
      label: "VlValor",
      name: "VlValor",
      typeField: "float",

      scale: 4,
    },
    {
      field: "TxTipLcto",
      label: "TxTipLcto",
      name: "TxTipLcto",
      typeField: "string",
    },
    {
      field: "CdFilialAssociada",
      label: "CdFilialAssociada",
      name: "CdFilialAssociada",
      typeField: "int",
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
    },
    {
      field: "CdContabil",
      label: "CdContabil",
      name: "CdContabil",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdBancoDestino",
      label: "CdBancoDestino",
      name: "CdBancoDestino",
      typeField: "int",
    },
    {
      field: "NumContaDestino",
      label: "NumContaDestino",
      name: "NumContaDestino",
      typeField: "string",
    },
    {
      field: "NumLctoDestino",
      label: "NumLctoDestino",
      name: "NumLctoDestino",
      typeField: "int",
    },
    {
      field: "CdAgenciaDestino",
      label: "CdAgenciaDestino",
      name: "CdAgenciaDestino",
      typeField: "int",
    },
  ],
};
