import { TTableDef } from "@/types/model";

export const ConfiguracaoSITEF: TTableDef = {
  database: "plano",
  table: "ConfiguracaoSITEF",
  fields: [
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Host1",
      label: "Host1",
      name: "Host1",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Host2",
      label: "Host2",
      name: "Host2",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Host3",
      label: "Host3",
      name: "Host3",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Host4",
      label: "Host4",
      name: "Host4",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Loja",
      label: "Loja",
      name: "Loja",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "MsgPINPAD",
      label: "MsgPINPAD",
      name: "MsgPINPAD",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CaminhoSITEF",
      label: "CaminhoSITEF",
      name: "CaminhoSITEF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ContraSenha",
      label: "ContraSenha",
      name: "ContraSenha",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "ConfiguracaoSITEF_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
  ],
};
