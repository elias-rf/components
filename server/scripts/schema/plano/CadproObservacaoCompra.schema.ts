import { TEntity } from "../../../../types";

export const CadproObservacaoCompra: TEntity = {
  database: "plano",
  table: "CadproObservacaoCompra",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CadproObservacaoCompra_id",
      type: "string",
      size: 16,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "ObservacaoCompra",
      label: "ObservacaoCompra",
      name: "ObservacaoCompra",
      type: "string",
      size: 7680,
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
  ],
};
