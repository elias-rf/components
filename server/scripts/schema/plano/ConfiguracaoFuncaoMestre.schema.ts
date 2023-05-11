import { TTableDef } from "@/types/model";

export const ConfiguracaoFuncaoMestre: TTableDef = {
  database: "plano",
  table: "ConfiguracaoFuncaoMestre",
  fields: [
    {
      field: "CdFuncao",
      label: "CdFuncao",
      name: "ConfiguracaoFuncaoMestre_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
