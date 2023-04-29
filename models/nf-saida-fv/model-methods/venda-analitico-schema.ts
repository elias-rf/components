import { TFields } from "@mono/types";

export function vendaAnaliticoSchema(): () => Promise<TFields> {
  return async () => {
    return [
      {
        name: "NmCategoria",
        label: "Categoria",
        typeField: "string",
      },
      {
        name: "DtEmissao",
        label: "Emissão",
        typeField: "date",
      },
      {
        name: "NumNota",
        label: "Nota Fiscal",
        typeField: "string",
      },
      {
        name: "Serie",
        label: "Série",
        typeField: "string",
      },
      {
        name: "Tipo",
        label: "Tipo",
        typeField: "string",
      },
      {
        name: "CdProduto",
        label: "Cód Produto",
        typeField: "float",
      },
      {
        name: "Quantidade",
        label: "Quantidade",
        typeField: "float",
      },
      {
        name: "VlTotal",
        label: "Valor",
        typeField: "float",
      },
      {
        name: "Descricao",
        label: "Produto",
        typeField: "float",
      },
      {
        name: "CdVendedor",
        label: "Cód Vendedor",
        typeField: "int",
      },
      {
        name: "NmVendedor",
        label: "Vendedor",
        typeField: "string",
      },
      {
        name: "uf",
        label: "UF",
        typeField: "string",
      },
    ];
  };
}
