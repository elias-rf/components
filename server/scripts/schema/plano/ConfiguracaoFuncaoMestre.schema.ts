import { TEntity } from "../../../../types";

export const ConfiguracaoFuncaoMestre: TEntity = {
  database: "plano",
  table: "ConfiguracaoFuncaoMestre",
  schema: [
    {
      field: "CdFuncao",
      label: "CdFuncao",
      name: "ConfiguracaoFuncaoMestre_id",
      type: "string",
      size: 32,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 126,
      allowNull: false,
    },
  ],
};
