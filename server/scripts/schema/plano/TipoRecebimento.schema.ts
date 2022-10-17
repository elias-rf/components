import { TEntity } from "../../../../types";

export const TipoRecebimento: TEntity = {
  database: "plano",
  table: "TipoRecebimento",
  fields: [
    {
      field: "CdTipo",
      label: "CdTipo",
      name: "TipoRecebimento_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 25,
    },
    {
      field: "NumAutenticacao",
      label: "NumAutenticacao",
      name: "NumAutenticacao",
      type: "int",
      size: 1,
    },
    {
      field: "Cheque",
      label: "Cheque",
      name: "Cheque",
      type: "string",
      size: 1,
    },
    {
      field: "Dinheiro",
      label: "Dinheiro",
      name: "Dinheiro",
      type: "string",
      size: 1,
    },
  ],
};
