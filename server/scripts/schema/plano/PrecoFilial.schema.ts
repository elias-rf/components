import { TEntity } from "@er/types/*";

export const PrecoFilial: TEntity =
  {
  "database": "plano",
  "table": "PrecoFilial",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "DtFinalPromAtacado",
      "label": "DtFinalPromAtacado",
      "name": "DtFinalPromAtacado",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtFinalPromVarejo",
      "label": "DtFinalPromVarejo",
      "name": "DtFinalPromVarejo",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtInicialPromAtacado",
      "label": "DtInicialPromAtacado",
      "name": "DtInicialPromAtacado",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtInicialPromVarejo",
      "label": "DtInicialPromVarejo",
      "name": "DtInicialPromVarejo",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "VlAtacado",
      "label": "VlAtacado",
      "name": "VlAtacado",
      "type": "int",
      "size": 13,
      "scale": 10
    },
    {
      "field": "VlPromAtacado",
      "label": "VlPromAtacado",
      "name": "VlPromAtacado",
      "type": "int",
      "size": 13,
      "scale": 10
    },
    {
      "field": "VlPromVarejo",
      "label": "VlPromVarejo",
      "name": "VlPromVarejo",
      "type": "int",
      "size": 13,
      "scale": 10
    },
    {
      "field": "VlVenda",
      "label": "VlVenda",
      "name": "VlVenda",
      "type": "int",
      "size": 13,
      "scale": 10
    },
    {
      "field": "VlTabela",
      "label": "VlTabela",
      "name": "VlTabela",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlVendaAnterior",
      "label": "VlVendaAnterior",
      "name": "VlVendaAnterior",
      "type": "int",
      "size": 13,
      "scale": 10
    },
    {
      "field": "VlAtacadoAnterior",
      "label": "VlAtacadoAnterior",
      "name": "VlAtacadoAnterior",
      "type": "int",
      "size": 13,
      "scale": 10
    },
    {
      "field": "DtUltAlteracaoVlTabela",
      "label": "DtUltAlteracaoVlTabela",
      "name": "DtUltAlteracaoVlTabela",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "VlCusto",
      "label": "VlCusto",
      "name": "VlCusto",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DtUltAlteracaoVlCusto",
      "label": "DtUltAlteracaoVlCusto",
      "name": "DtUltAlteracaoVlCusto",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtUltAlteracaoVlVenda",
      "label": "DtUltAlteracaoVlVenda",
      "name": "DtUltAlteracaoVlVenda",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtUltAlteracaoVlAtacado",
      "label": "DtUltAlteracaoVlAtacado",
      "name": "DtUltAlteracaoVlAtacado",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "PercDescontoA",
      "label": "PercDescontoA",
      "name": "PercDescontoA",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercDescontoB",
      "label": "PercDescontoB",
      "name": "PercDescontoB",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercDescontoC",
      "label": "PercDescontoC",
      "name": "PercDescontoC",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercDescontoD",
      "label": "PercDescontoD",
      "name": "PercDescontoD",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercDescontoE",
      "label": "PercDescontoE",
      "name": "PercDescontoE",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercDescontoFidelizacao",
      "label": "PercDescontoFidelizacao",
      "name": "PercDescontoFidelizacao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercDescontoFidelidade",
      "label": "PercDescontoFidelidade",
      "name": "PercDescontoFidelidade",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercDescMaxVendedor",
      "label": "PercDescMaxVendedor",
      "name": "PercDescMaxVendedor",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercDescExtra",
      "label": "PercDescExtra",
      "name": "PercDescExtra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercAcresFinanc",
      "label": "PercAcresFinanc",
      "name": "PercAcresFinanc",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercDescMaxGerente",
      "label": "PercDescMaxGerente",
      "name": "PercDescMaxGerente",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercDescontoEspecial",
      "label": "PercDescontoEspecial",
      "name": "PercDescontoEspecial",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercDescVista",
      "label": "PercDescVista",
      "name": "PercDescVista",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercDescPrazo",
      "label": "PercDescPrazo",
      "name": "PercDescPrazo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgDescVendedorDireto",
      "label": "FgDescVendedorDireto",
      "name": "FgDescVendedorDireto",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPrecoFabrica",
      "label": "FgPrecoFabrica",
      "name": "FgPrecoFabrica",
      "type": "string",
      "size": 1
    },
    {
      "field": "DescontoF",
      "label": "DescontoF",
      "name": "DescontoF",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DescontoG",
      "label": "DescontoG",
      "name": "DescontoG",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DescontoH",
      "label": "DescontoH",
      "name": "DescontoH",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DescontoI",
      "label": "DescontoI",
      "name": "DescontoI",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DescontoJ",
      "label": "DescontoJ",
      "name": "DescontoJ",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
