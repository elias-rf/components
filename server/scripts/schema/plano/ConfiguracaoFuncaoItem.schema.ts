import { TEntity } from "../../../../types";

export const ConfiguracaoFuncaoItem: TEntity = {
  database: "plano",
  table: "ConfiguracaoFuncaoItem",
  fields: [
    {
      field: "CdFuncao",
      label: "CdFuncao",
      name: "CdFuncao",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Parametro",
      label: "Parametro",
      name: "Parametro",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Conteudo",
      label: "Conteudo",
      name: "Conteudo",
      type: "string",
      size: 16,
      allowNull: false,
    },
  ],
};
