import { TTableDef } from "@mono/types/model";

export const ConfiguracaoFuncaoMestre: TTableDef = {
  database: "plano",
  table: "ConfiguracaoFuncaoMestre",
  fields: [
    {
      field: "CdFuncao",
      label: "CdFuncao",
      name: "ConfiguracaoFuncaoMestre_id",
      typeField: "string",
      size: 32,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 126,
      allowNull: false,
    },
  ],
};
