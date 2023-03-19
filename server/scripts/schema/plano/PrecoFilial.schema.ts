import { TTableDef } from "../../../../types/model";

export const PrecoFilial: TTableDef = {
  database: "plano",
  table: "PrecoFilial",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "DtFinalPromAtacado",
      label: "DtFinalPromAtacado",
      name: "DtFinalPromAtacado",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtFinalPromVarejo",
      label: "DtFinalPromVarejo",
      name: "DtFinalPromVarejo",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtInicialPromAtacado",
      label: "DtInicialPromAtacado",
      name: "DtInicialPromAtacado",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtInicialPromVarejo",
      label: "DtInicialPromVarejo",
      name: "DtInicialPromVarejo",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "VlAtacado",
      label: "VlAtacado",
      name: "VlAtacado",
      typeField: "int",
      size: 13,
      scale: 10,
    },
    {
      field: "VlPromAtacado",
      label: "VlPromAtacado",
      name: "VlPromAtacado",
      typeField: "int",
      size: 13,
      scale: 10,
    },
    {
      field: "VlPromVarejo",
      label: "VlPromVarejo",
      name: "VlPromVarejo",
      typeField: "int",
      size: 13,
      scale: 10,
    },
    {
      field: "VlVenda",
      label: "VlVenda",
      name: "VlVenda",
      typeField: "int",
      size: 13,
      scale: 10,
    },
    {
      field: "VlTabela",
      label: "VlTabela",
      name: "VlTabela",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlVendaAnterior",
      label: "VlVendaAnterior",
      name: "VlVendaAnterior",
      typeField: "int",
      size: 13,
      scale: 10,
    },
    {
      field: "VlAtacadoAnterior",
      label: "VlAtacadoAnterior",
      name: "VlAtacadoAnterior",
      typeField: "int",
      size: 13,
      scale: 10,
    },
    {
      field: "DtUltAlteracaoVlTabela",
      label: "DtUltAlteracaoVlTabela",
      name: "DtUltAlteracaoVlTabela",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "VlCusto",
      label: "VlCusto",
      name: "VlCusto",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DtUltAlteracaoVlCusto",
      label: "DtUltAlteracaoVlCusto",
      name: "DtUltAlteracaoVlCusto",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtUltAlteracaoVlVenda",
      label: "DtUltAlteracaoVlVenda",
      name: "DtUltAlteracaoVlVenda",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtUltAlteracaoVlAtacado",
      label: "DtUltAlteracaoVlAtacado",
      name: "DtUltAlteracaoVlAtacado",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "PercDescontoA",
      label: "PercDescontoA",
      name: "PercDescontoA",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercDescontoB",
      label: "PercDescontoB",
      name: "PercDescontoB",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercDescontoC",
      label: "PercDescontoC",
      name: "PercDescontoC",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercDescontoD",
      label: "PercDescontoD",
      name: "PercDescontoD",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercDescontoE",
      label: "PercDescontoE",
      name: "PercDescontoE",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercDescontoFidelizacao",
      label: "PercDescontoFidelizacao",
      name: "PercDescontoFidelizacao",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercDescontoFidelidade",
      label: "PercDescontoFidelidade",
      name: "PercDescontoFidelidade",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercDescMaxVendedor",
      label: "PercDescMaxVendedor",
      name: "PercDescMaxVendedor",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercDescExtra",
      label: "PercDescExtra",
      name: "PercDescExtra",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercAcresFinanc",
      label: "PercAcresFinanc",
      name: "PercAcresFinanc",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercDescMaxGerente",
      label: "PercDescMaxGerente",
      name: "PercDescMaxGerente",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercDescontoEspecial",
      label: "PercDescontoEspecial",
      name: "PercDescontoEspecial",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercDescVista",
      label: "PercDescVista",
      name: "PercDescVista",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercDescPrazo",
      label: "PercDescPrazo",
      name: "PercDescPrazo",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgDescVendedorDireto",
      label: "FgDescVendedorDireto",
      name: "FgDescVendedorDireto",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgPrecoFabrica",
      label: "FgPrecoFabrica",
      name: "FgPrecoFabrica",
      typeField: "string",
      size: 1,
    },
    {
      field: "DescontoF",
      label: "DescontoF",
      name: "DescontoF",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DescontoG",
      label: "DescontoG",
      name: "DescontoG",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DescontoH",
      label: "DescontoH",
      name: "DescontoH",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DescontoI",
      label: "DescontoI",
      name: "DescontoI",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DescontoJ",
      label: "DescontoJ",
      name: "DescontoJ",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};
