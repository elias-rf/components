import { TTableDef } from "@/types/model";

export const ConfiguracaoFuncaoItem: TTableDef = {
  database: "plano",
  table: "ConfiguracaoFuncaoItem",
  fields: [
    {
      field: "CdFuncao",
      label: "CdFuncao",
      name: "CdFuncao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Parametro",
      label: "Parametro",
      name: "Parametro",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Conteudo",
      label: "Conteudo",
      name: "Conteudo",
      typeField: "string",

      allowNull: false,
    },
  ],
};
