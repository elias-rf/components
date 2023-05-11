import { TTableDef } from "@/types/model";

export const TipoRecebimento: TTableDef = {
  database: "plano",
  table: "TipoRecebimento",
  fields: [
    {
      field: "CdTipo",
      label: "CdTipo",
      name: "TipoRecebimento_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
    {
      field: "NumAutenticacao",
      label: "NumAutenticacao",
      name: "NumAutenticacao",
      typeField: "int",
    },
    {
      field: "Cheque",
      label: "Cheque",
      name: "Cheque",
      typeField: "string",
    },
    {
      field: "Dinheiro",
      label: "Dinheiro",
      name: "Dinheiro",
      typeField: "string",
    },
  ],
};
