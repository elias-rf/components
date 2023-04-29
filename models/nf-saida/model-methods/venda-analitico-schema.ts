import { TFieldDef } from "@mono/types";

export function vendaAnaliticoSchema(): () => Promise<TFieldDef[]> {
  return async () => {
    return [
      {
        name: "NmCategoria",
        label: "Categoria",
        type: "string",
        primaryKey: true,
      },
      {
        name: "DtEmissao",
        label: "Emissão",
        type: "date",
      },
      {
        name: "NumNota",
        label: "Nota Fiscal",
        type: "string",
      },
      {
        name: "Serie",
        label: "Série",
        type: "string",
      },
      {
        name: "Tipo",
        label: "Tipo",
        type: "string",
      },
      {
        name: "CdProduto",
        label: "Cód Produto",
        type: "float",
      },
      {
        name: "Quantidade",
        label: "Quantidade",
        type: "float",
      },
      {
        name: "VlTotal",
        label: "Valor",
        type: "float",
      },
      {
        name: "Descricao",
        label: "Produto",
        type: "float",
      },
      {
        name: "CdVendedor",
        label: "Cód Vendedor",
        type: "int",
      },
      {
        name: "NmVendedor",
        label: "Vendedor",
        type: "string",
      },
      {
        name: "uf",
        label: "UF",
        type: "string",
      },
    ];
  };
}
