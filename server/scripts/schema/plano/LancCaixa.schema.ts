import { TTableDef } from "../../../../types/model";

export const LancCaixa: TTableDef = {
  database: "plano",
  table: "LancCaixa",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 4,
    },
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "string",
      size: 12,
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
      field: "NumLcto",
      label: "NumLcto",
      name: "NumLcto",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdTpAplicacao",
      label: "CdTpAplicacao",
      name: "CdTpAplicacao",
      typeField: "int",
      size: 2,
    },
    {
      field: "VlValor",
      label: "VlValor",
      name: "VlValor",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "TxFinalidade",
      label: "TxFinalidade",
      name: "TxFinalidade",
      typeField: "string",
      size: 90,
    },
    {
      field: "TxTipLcto",
      label: "TxTipLcto",
      name: "TxTipLcto",
      typeField: "string",
      size: 1,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 4,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",
      size: 4,
    },
    {
      field: "CodFor",
      label: "CodFor",
      name: "CodFor",
      typeField: "int",
      size: 4,
    },
    {
      field: "SeqDoc",
      label: "SeqDoc",
      name: "SeqDoc",
      typeField: "int",
      size: 2,
    },
  ],
};
