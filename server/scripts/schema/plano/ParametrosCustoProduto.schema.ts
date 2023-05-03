import { TTableDef } from "@/types/model";

export const ParametrosCustoProduto: TTableDef = {
  database: "plano",
  table: "ParametrosCustoProduto",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercLucroVarejo",
      label: "PercLucroVarejo",
      name: "PercLucroVarejo",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercLucroAtacado",
      label: "PercLucroAtacado",
      name: "PercLucroAtacado",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercRedCusto",
      label: "PercRedCusto",
      name: "PercRedCusto",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercDesconto1",
      label: "PercDesconto1",
      name: "PercDesconto1",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercDesconto2",
      label: "PercDesconto2",
      name: "PercDesconto2",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercDesconto3",
      label: "PercDesconto3",
      name: "PercDesconto3",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercDesconto4",
      label: "PercDesconto4",
      name: "PercDesconto4",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercDesconto5",
      label: "PercDesconto5",
      name: "PercDesconto5",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercIPIFabricante",
      label: "PercIPIFabricante",
      name: "PercIPIFabricante",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercCustoFinanceiro",
      label: "PercCustoFinanceiro",
      name: "PercCustoFinanceiro",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercDiferencaICMS",
      label: "PercDiferencaICMS",
      name: "PercDiferencaICMS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercPisCofins",
      label: "PercPisCofins",
      name: "PercPisCofins",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercCustoEmbalagem",
      label: "PercCustoEmbalagem",
      name: "PercCustoEmbalagem",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercAcrescimoDiversos",
      label: "PercAcrescimoDiversos",
      name: "PercAcrescimoDiversos",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCustoFrete",
      label: "VlCustoFrete",
      name: "VlCustoFrete",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
