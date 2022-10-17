import { TEntity } from "../../../../types";

export const CadProCliente: TEntity = {
  database: "plano",
  table: "CadProCliente",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "CdReferenciaCliente",
      label: "CdReferenciaCliente",
      name: "CdReferenciaCliente",
      type: "string",
      size: 16,
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
      field: "NumItemPedido",
      label: "NumItemPedido",
      name: "NumItemPedido",
      type: "string",
      size: 16,
      allowNull: false,
    },
  ],
};
