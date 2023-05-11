import { TTableDef } from "@/types/model";

export const MestrePedidoOrdemServico: TTableDef = {
  database: "plano",
  table: "MestrePedidoOrdemServico",
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
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Veiculo",
      label: "Veiculo",
      name: "Veiculo",
      typeField: "string",
    },
    {
      field: "Marca",
      label: "Marca",
      name: "Marca",
      typeField: "string",
    },
    {
      field: "Cor",
      label: "Cor",
      name: "Cor",
      typeField: "string",
    },
    {
      field: "Ano",
      label: "Ano",
      name: "Ano",
      typeField: "int",
    },
    {
      field: "Placa",
      label: "Placa",
      name: "Placa",
      typeField: "string",
    },
    {
      field: "Frota",
      label: "Frota",
      name: "Frota",
      typeField: "string",
    },
    {
      field: "NumSinistro",
      label: "NumSinistro",
      name: "NumSinistro",
      typeField: "string",
    },
    {
      field: "Motorista",
      label: "Motorista",
      name: "Motorista",
      typeField: "string",
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",
    },
    {
      field: "KM",
      label: "KM",
      name: "KM",
      typeField: "int",

      scale: 3,
    },
  ],
};
