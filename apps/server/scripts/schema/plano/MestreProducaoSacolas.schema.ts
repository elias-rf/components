import { TEntity } from "@er/types/*";

export const MestreProducaoSacolas: TEntity =
  {
  "database": "plano",
  "table": "MestreProducaoSacolas",
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
      "field": "NumProducao",
      "label": "NumProducao",
      "name": "NumProducao",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "DtProducao",
      "label": "DtProducao",
      "name": "DtProducao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdVendedor",
      "label": "CdVendedor",
      "name": "CdVendedor",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdSacola",
      "label": "CdSacola",
      "name": "CdSacola",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "DtEntrega",
      "label": "DtEntrega",
      "name": "DtEntrega",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Qtde",
      "label": "Qtde",
      "name": "Qtde",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdUnidade",
      "label": "CdUnidade",
      "name": "CdUnidade",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "Largura",
      "label": "Largura",
      "name": "Largura",
      "type": "int",
      "size": 9,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "Comprimento",
      "label": "Comprimento",
      "name": "Comprimento",
      "type": "int",
      "size": 9,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "Espessura",
      "label": "Espessura",
      "name": "Espessura",
      "type": "int",
      "size": 9,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "LarguraExtrusao",
      "label": "LarguraExtrusao",
      "name": "LarguraExtrusao",
      "type": "int",
      "size": 9,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "PesoSacola",
      "label": "PesoSacola",
      "name": "PesoSacola",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PesoTotal",
      "label": "PesoTotal",
      "name": "PesoTotal",
      "type": "int",
      "size": 9,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Oxi",
      "label": "Oxi",
      "name": "Oxi",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "Tratamento",
      "label": "Tratamento",
      "name": "Tratamento",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "GramaMetro",
      "label": "GramaMetro",
      "name": "GramaMetro",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "Variacao",
      "label": "Variacao",
      "name": "Variacao",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "Material",
      "label": "Material",
      "name": "Material",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "Ping",
      "label": "Ping",
      "name": "Ping",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "Sanfona",
      "label": "Sanfona",
      "name": "Sanfona",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "CoresImpressao",
      "label": "CoresImpressao",
      "name": "CoresImpressao",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "Marca",
      "label": "Marca",
      "name": "Marca",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "EmbalagemPara",
      "label": "EmbalagemPara",
      "name": "EmbalagemPara",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "CdFase",
      "label": "CdFase",
      "name": "CdFase",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NumBobinas",
      "label": "NumBobinas",
      "name": "NumBobinas",
      "type": "int",
      "size": 9
    },
    {
      "field": "Diametro",
      "label": "Diametro",
      "name": "Diametro",
      "type": "int",
      "size": 9
    }
  ]
}
