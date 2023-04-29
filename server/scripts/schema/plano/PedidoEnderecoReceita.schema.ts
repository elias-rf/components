import { TTableDef } from "@mono/types/model";

export const PedidoEnderecoReceita: TTableDef = {
  database: "plano",
  table: "PedidoEnderecoReceita",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "EnderecoReceita",
      label: "EnderecoReceita",
      name: "EnderecoReceita",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "DtBusca",
      label: "DtBusca",
      name: "DtBusca",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "HrInicial",
      label: "HrInicial",
      name: "HrInicial",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "HrFinal",
      label: "HrFinal",
      name: "HrFinal",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
