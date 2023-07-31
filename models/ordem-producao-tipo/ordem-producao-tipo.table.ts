import { TTableDef } from "@/types";

export const ordem_producao_tipo: TTableDef = {
  database: "oftalmo",
  table: "tTipoDeOP",
  fields: [
    {
      // chave primária
      field: "kTipoOp",
      label: "tipo",
      name: "ordem_producao_tipo_id",
      typeField: "int",
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescTipo",
      label: "Descrição",
      name: "descricao",
      typeField: "string",
    },
  ],
};
