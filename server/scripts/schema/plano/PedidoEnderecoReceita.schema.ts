import { TTableDef } from "@/types/model";

export const PedidoEnderecoReceita: TTableDef = {
  database: "plano",
  table: "PedidoEnderecoReceita",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "EnderecoReceita",
      label: "EnderecoReceita",
      name: "EnderecoReceita",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtBusca",
      label: "DtBusca",
      name: "DtBusca",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "HrInicial",
      label: "HrInicial",
      name: "HrInicial",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "HrFinal",
      label: "HrFinal",
      name: "HrFinal",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
