import { TTable } from "../../../../types";

export const CadProObservacao: TTable = {
  database: "plano",
  table: "CadProObservacao",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CadProObservacao_id",
      type: "string",
      size: 15,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      type: "string",
      size: 7680,
    },
  ],
};
