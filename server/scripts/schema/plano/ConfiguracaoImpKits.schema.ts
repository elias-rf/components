import { TTableDef } from "@/types/model";

export const ConfiguracaoImpKits: TTableDef = {
  database: "plano",
  table: "ConfiguracaoImpKits",
  fields: [
    {
      field: "CdKit",
      label: "CdKit",
      name: "ConfiguracaoImpKits_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NumOP",
      label: "NumOP",
      name: "NumOP",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ProdutoProduzido",
      label: "ProdutoProduzido",
      name: "ProdutoProduzido",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "LoteProdutoProduzido",
      label: "LoteProdutoProduzido",
      name: "LoteProdutoProduzido",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "QtdeProdutoProduzido",
      label: "QtdeProdutoProduzido",
      name: "QtdeProdutoProduzido",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "LoteGrelhaProduzida",
      label: "LoteGrelhaProduzida",
      name: "LoteGrelhaProduzida",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "QtdeGrelhaProduzida",
      label: "QtdeGrelhaProduzida",
      name: "QtdeGrelhaProduzida",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Largura",
      label: "Largura",
      name: "Largura",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Espessura",
      label: "Espessura",
      name: "Espessura",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DescMateriaPrima",
      label: "DescMateriaPrima",
      name: "DescMateriaPrima",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "QtdeMateriaPrima",
      label: "QtdeMateriaPrima",
      name: "QtdeMateriaPrima",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "LoteMateriaPrima",
      label: "LoteMateriaPrima",
      name: "LoteMateriaPrima",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "MaquinaProducao",
      label: "MaquinaProducao",
      name: "MaquinaProducao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtFabricacao",
      label: "DtFabricacao",
      name: "DtFabricacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "OperadorMaquina",
      label: "OperadorMaquina",
      name: "OperadorMaquina",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoCaixa",
      label: "TipoCaixa",
      name: "TipoCaixa",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "PecaCaixa",
      label: "PecaCaixa",
      name: "PecaCaixa",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "LoteCaixa",
      label: "LoteCaixa",
      name: "LoteCaixa",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtExtrusao",
      label: "DtExtrusao",
      name: "DtExtrusao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdProdutoProduzido",
      label: "CdProdutoProduzido",
      name: "CdProdutoProduzido",
      typeField: "string",
    },
    {
      field: "CdMateriaPrima",
      label: "CdMateriaPrima",
      name: "CdMateriaPrima",
      typeField: "string",
    },
    {
      field: "Cliente",
      label: "Cliente",
      name: "Cliente",
      typeField: "string",
    },
    {
      field: "PostoProdutivo1",
      label: "PostoProdutivo1",
      name: "PostoProdutivo1",
      typeField: "string",
    },
    {
      field: "PostoProdutivo2",
      label: "PostoProdutivo2",
      name: "PostoProdutivo2",
      typeField: "string",
    },
    {
      field: "PostoProdutivo3",
      label: "PostoProdutivo3",
      name: "PostoProdutivo3",
      typeField: "string",
    },
    {
      field: "PostoProdutivo4",
      label: "PostoProdutivo4",
      name: "PostoProdutivo4",
      typeField: "string",
    },
    {
      field: "PostoProdutivo5",
      label: "PostoProdutivo5",
      name: "PostoProdutivo5",
      typeField: "string",
    },
    {
      field: "PostoProdutivo6",
      label: "PostoProdutivo6",
      name: "PostoProdutivo6",
      typeField: "string",
    },
    {
      field: "DescOperacao1",
      label: "DescOperacao1",
      name: "DescOperacao1",
      typeField: "string",
    },
    {
      field: "DescOperacao2",
      label: "DescOperacao2",
      name: "DescOperacao2",
      typeField: "string",
    },
    {
      field: "DescOperacao3",
      label: "DescOperacao3",
      name: "DescOperacao3",
      typeField: "string",
    },
    {
      field: "DescOperacao4",
      label: "DescOperacao4",
      name: "DescOperacao4",
      typeField: "string",
    },
    {
      field: "DescOperacao5",
      label: "DescOperacao5",
      name: "DescOperacao5",
      typeField: "string",
    },
    {
      field: "DescOperacao6",
      label: "DescOperacao6",
      name: "DescOperacao6",
      typeField: "string",
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "string",
    },
    {
      field: "Obs",
      label: "Obs",
      name: "Obs",
      typeField: "string",
    },
  ],
};
