import { TTableDef } from "@/types/model";

export const PrecoFilial: TTableDef = {
  database: "plano",
  table: "PrecoFilial",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

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
      field: "DtFinalPromAtacado",
      label: "DtFinalPromAtacado",
      name: "DtFinalPromAtacado",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtFinalPromVarejo",
      label: "DtFinalPromVarejo",
      name: "DtFinalPromVarejo",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtInicialPromAtacado",
      label: "DtInicialPromAtacado",
      name: "DtInicialPromAtacado",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtInicialPromVarejo",
      label: "DtInicialPromVarejo",
      name: "DtInicialPromVarejo",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "VlAtacado",
      label: "VlAtacado",
      name: "VlAtacado",
      typeField: "int",

      scale: 10,
    },
    {
      field: "VlPromAtacado",
      label: "VlPromAtacado",
      name: "VlPromAtacado",
      typeField: "int",

      scale: 10,
    },
    {
      field: "VlPromVarejo",
      label: "VlPromVarejo",
      name: "VlPromVarejo",
      typeField: "int",

      scale: 10,
    },
    {
      field: "VlVenda",
      label: "VlVenda",
      name: "VlVenda",
      typeField: "int",

      scale: 10,
    },
    {
      field: "VlTabela",
      label: "VlTabela",
      name: "VlTabela",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlVendaAnterior",
      label: "VlVendaAnterior",
      name: "VlVendaAnterior",
      typeField: "int",

      scale: 10,
    },
    {
      field: "VlAtacadoAnterior",
      label: "VlAtacadoAnterior",
      name: "VlAtacadoAnterior",
      typeField: "int",

      scale: 10,
    },
    {
      field: "DtUltAlteracaoVlTabela",
      label: "DtUltAlteracaoVlTabela",
      name: "DtUltAlteracaoVlTabela",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "VlCusto",
      label: "VlCusto",
      name: "VlCusto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtUltAlteracaoVlCusto",
      label: "DtUltAlteracaoVlCusto",
      name: "DtUltAlteracaoVlCusto",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtUltAlteracaoVlVenda",
      label: "DtUltAlteracaoVlVenda",
      name: "DtUltAlteracaoVlVenda",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtUltAlteracaoVlAtacado",
      label: "DtUltAlteracaoVlAtacado",
      name: "DtUltAlteracaoVlAtacado",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "PercDescontoA",
      label: "PercDescontoA",
      name: "PercDescontoA",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercDescontoB",
      label: "PercDescontoB",
      name: "PercDescontoB",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercDescontoC",
      label: "PercDescontoC",
      name: "PercDescontoC",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercDescontoD",
      label: "PercDescontoD",
      name: "PercDescontoD",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercDescontoE",
      label: "PercDescontoE",
      name: "PercDescontoE",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercDescontoFidelizacao",
      label: "PercDescontoFidelizacao",
      name: "PercDescontoFidelizacao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercDescontoFidelidade",
      label: "PercDescontoFidelidade",
      name: "PercDescontoFidelidade",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercDescMaxVendedor",
      label: "PercDescMaxVendedor",
      name: "PercDescMaxVendedor",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercDescExtra",
      label: "PercDescExtra",
      name: "PercDescExtra",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercAcresFinanc",
      label: "PercAcresFinanc",
      name: "PercAcresFinanc",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercDescMaxGerente",
      label: "PercDescMaxGerente",
      name: "PercDescMaxGerente",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercDescontoEspecial",
      label: "PercDescontoEspecial",
      name: "PercDescontoEspecial",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercDescVista",
      label: "PercDescVista",
      name: "PercDescVista",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercDescPrazo",
      label: "PercDescPrazo",
      name: "PercDescPrazo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgDescVendedorDireto",
      label: "FgDescVendedorDireto",
      name: "FgDescVendedorDireto",
      typeField: "string",
    },
    {
      field: "FgPrecoFabrica",
      label: "FgPrecoFabrica",
      name: "FgPrecoFabrica",
      typeField: "string",
    },
    {
      field: "DescontoF",
      label: "DescontoF",
      name: "DescontoF",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DescontoG",
      label: "DescontoG",
      name: "DescontoG",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DescontoH",
      label: "DescontoH",
      name: "DescontoH",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DescontoI",
      label: "DescontoI",
      name: "DescontoI",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DescontoJ",
      label: "DescontoJ",
      name: "DescontoJ",
      typeField: "float",

      scale: 4,
    },
  ],
};
