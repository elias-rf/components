import { TEntity } from "@er/types/*";

export const Estoque: TEntity =
  {
  "database": "plano",
  "table": "Estoque",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 2,
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
      "field": "EndPrateleira",
      "label": "EndPrateleira",
      "name": "EndPrateleira",
      "type": "string",
      "size": 15
    },
    {
      "field": "EstInicial",
      "label": "EstInicial",
      "name": "EstInicial",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "EstAtual",
      "label": "EstAtual",
      "name": "EstAtual",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "EstCorrecao",
      "label": "EstCorrecao",
      "name": "EstCorrecao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DemandaDia",
      "label": "DemandaDia",
      "name": "DemandaDia",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "EstMaximo",
      "label": "EstMaximo",
      "name": "EstMaximo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "EstMinimo",
      "label": "EstMinimo",
      "name": "EstMinimo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "MaximoDia",
      "label": "MaximoDia",
      "name": "MaximoDia",
      "type": "int",
      "size": 4
    },
    {
      "field": "MinimoDia",
      "label": "MinimoDia",
      "name": "MinimoDia",
      "type": "int",
      "size": 4
    },
    {
      "field": "QtdeAssistencia",
      "label": "QtdeAssistencia",
      "name": "QtdeAssistencia",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "QtdeConsignacao",
      "label": "QtdeConsignacao",
      "name": "QtdeConsignacao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "QtdeDemonstracao",
      "label": "QtdeDemonstracao",
      "name": "QtdeDemonstracao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "QtdePedEntrada",
      "label": "QtdePedEntrada",
      "name": "QtdePedEntrada",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "QtdePedSaida",
      "label": "QtdePedSaida",
      "name": "QtdePedSaida",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DtUltMovimento",
      "label": "DtUltMovimento",
      "name": "DtUltMovimento",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "EstReservado",
      "label": "EstReservado",
      "name": "EstReservado",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlUltCustoMedio",
      "label": "VlUltCustoMedio",
      "name": "VlUltCustoMedio",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdMoedaCustoMedio",
      "label": "CdMoedaCustoMedio",
      "name": "CdMoedaCustoMedio",
      "type": "string",
      "size": 15
    },
    {
      "field": "PercRepasseComercial",
      "label": "PercRepasseComercial",
      "name": "PercRepasseComercial",
      "type": "int",
      "size": 5,
      "scale": 4
    },
    {
      "field": "PercDescontoComercial",
      "label": "PercDescontoComercial",
      "name": "PercDescontoComercial",
      "type": "int",
      "size": 5,
      "scale": 4
    },
    {
      "field": "VlBaseCalculoSTRetido",
      "label": "VlBaseCalculoSTRetido",
      "name": "VlBaseCalculoSTRetido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlICMSSTRetido",
      "label": "VlICMSSTRetido",
      "name": "VlICMSSTRetido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "AliquotaSTRetido",
      "label": "AliquotaSTRetido",
      "name": "AliquotaSTRetido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlICMSSubstituto",
      "label": "VlICMSSubstituto",
      "name": "VlICMSSubstituto",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
