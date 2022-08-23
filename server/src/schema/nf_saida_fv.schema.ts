import { TEntity } from "@er/types/*";

export const nf_saida_fv: TEntity = {
  database: "fullvision",
  table: "MestreNota",
  fields: [
    {
      field: "CdFilial",
      label: "Filial",
      name: "filial_id",
      primaryKey: true,
      type: "int",
    },
    {
      field: "NumNota",
      label: "Nota Fiscal",
      name: "nota_id",
      primaryKey: true,
      type: "int",
    },
    {
      field: "Serie",
      label: "Série",
      name: "serie",
      primaryKey: true,
      type: "int",
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "modelo",
      primaryKey: true,
      type: "string",
    },
    {
      field: "DtEmissao",
      label: "Emissão",
      name: "data_emissao",
      type: "date",
    },
    {
      field: "DtSaida",
      label: "Saída",
      name: "data_saida",
      type: "date",
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "tipo",
      type: "string",
    },
    {
      field: "CdCliente",
      label: "Cód Cliente",
      name: "cliente_id",
      type: "int",
    },
    {
      field: "CdVendedor",
      label: "Cód Vendedor",
      name: "vendedor_id",
      type: "int",
    },
    {
      field: "FgEstatistica",
      label: "Altera Vendas",
      name: "altera_vendas",
      type: "boolean",
    },
    {
      field: "FgEstoque",
      label: "Altera Estoque",
      name: "altera_estoque",
      type: "boolean",
    },
    {
      field: "VlTotal",
      label: "Valor Total",
      name: "valor_total",
      type: "float",
    },
    {
      field: "VlProdutos",
      label: "Valor Produto",
      name: "valor_produto",
      type: "float",
    },
    {
      field: "VlFrete",
      label: "Valor Frete",
      name: "valor_frete",
      type: "float",
    },
    {
      field: "NumPedido",
      label: "Pedido",
      name: "pedido_id",
      type: "int",
    },
    {
      field: "Nop",
      label: "CFOP",
      name: "cfop",
      type: "int",
    },
  ],
};
