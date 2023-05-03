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
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 25,
    },
    {
      field: "NumAutenticacao",
      label: "NumAutenticacao",
      name: "NumAutenticacao",
      typeField: "int",
      size: 1,
    },
    {
      field: "Cheque",
      label: "Cheque",
      name: "Cheque",
      typeField: "string",
      size: 1,
    },
    {
      field: "Dinheiro",
      label: "Dinheiro",
      name: "Dinheiro",
      typeField: "string",
      size: 1,
    },
  ],
};
