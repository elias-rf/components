import { TEntity } from "../../../../types";

export const ParametrosCategoria: TEntity = {
  database: "plano",
  table: "ParametrosCategoria",
  schema: [
    {
      field: "CdCategoria",
      label: "CdCategoria",
      name: "CdCategoria",
      type: "string",
      size: 6,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercRedCusto",
      label: "PercRedCusto",
      name: "PercRedCusto",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercLucroVarejo",
      label: "PercLucroVarejo",
      name: "PercLucroVarejo",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercLucroAtacado",
      label: "PercLucroAtacado",
      name: "PercLucroAtacado",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercDesconto1",
      label: "PercDesconto1",
      name: "PercDesconto1",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercDesconto2",
      label: "PercDesconto2",
      name: "PercDesconto2",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercDesconto3",
      label: "PercDesconto3",
      name: "PercDesconto3",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercDesconto4",
      label: "PercDesconto4",
      name: "PercDesconto4",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercDesconto5",
      label: "PercDesconto5",
      name: "PercDesconto5",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercIPIFabricante",
      label: "PercIPIFabricante",
      name: "PercIPIFabricante",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercCustoFinanceiro",
      label: "PercCustoFinanceiro",
      name: "PercCustoFinanceiro",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercDiferencaICMS",
      label: "PercDiferencaICMS",
      name: "PercDiferencaICMS",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercPisCofins",
      label: "PercPisCofins",
      name: "PercPisCofins",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercCustoEmbalagem",
      label: "PercCustoEmbalagem",
      name: "PercCustoEmbalagem",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercAcrescimoDiversos",
      label: "PercAcrescimoDiversos",
      name: "PercAcrescimoDiversos",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCustoFrete",
      label: "VlCustoFrete",
      name: "VlCustoFrete",
      type: "float",
      size: 8,
      scale: 4,
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