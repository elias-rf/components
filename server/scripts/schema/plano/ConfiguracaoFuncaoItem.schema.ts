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
      size: 32,
      allowNull: false,
    },
    {
      field: "Parametro",
      label: "Parametro",
      name: "Parametro",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Conteudo",
      label: "Conteudo",
      name: "Conteudo",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
  ],
};
