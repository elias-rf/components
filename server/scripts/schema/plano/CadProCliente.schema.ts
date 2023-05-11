import { TTableDef } from "@/types/model";

export const CadProCliente: TTableDef = {
  database: "plano",
  table: "CadProCliente",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdReferenciaCliente",
      label: "CdReferenciaCliente",
      name: "CdReferenciaCliente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumItemPedido",
      label: "NumItemPedido",
      name: "NumItemPedido",
      typeField: "string",

      allowNull: false,
    },
  ],
};
