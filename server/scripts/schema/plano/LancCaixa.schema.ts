import { TTableDef } from "@/types/model";

export const LancCaixa: TTableDef = {
  database: "plano",
  table: "LancCaixa",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
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
      field: "TxFinalidade",
      label: "TxFinalidade",
      name: "TxFinalidade",
      typeField: "string",
    },
    {
      field: "TxTipLcto",
      label: "TxTipLcto",
      name: "TxTipLcto",
      typeField: "string",
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",
    },
    {
      field: "CodFor",
      label: "CodFor",
      name: "CodFor",
      typeField: "int",
    },
    {
      field: "SeqDoc",
      label: "SeqDoc",
      name: "SeqDoc",
      typeField: "int",
    },
  ],
};
