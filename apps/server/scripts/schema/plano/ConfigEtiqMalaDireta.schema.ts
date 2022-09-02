import { TEntity } from "@er/types/*";

export const ConfigEtiqMalaDireta: TEntity =
  {
  "database": "plano",
  "table": "ConfigEtiqMalaDireta",
  "fields": [
    {
      "field": "Impressora",
      "label": "Impressora",
      "name": "ConfigEtiqMalaDireta_id",
      "type": "string",
      "size": 40,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "QtdeEtiquetasLinha",
      "label": "QtdeEtiquetasLinha",
      "name": "QtdeEtiquetasLinha",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "QtdeEtiquetasColunas",
      "label": "QtdeEtiquetasColunas",
      "name": "QtdeEtiquetasColunas",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "QtdeLinhasInicial",
      "label": "QtdeLinhasInicial",
      "name": "QtdeLinhasInicial",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "EspLateral",
      "label": "EspLateral",
      "name": "EspLateral",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "QtdeCaracteres",
      "label": "QtdeCaracteres",
      "name": "QtdeCaracteres",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "QtdeLinhas",
      "label": "QtdeLinhas",
      "name": "QtdeLinhas",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CaracteresEntreEtiquetas",
      "label": "CaracteresEntreEtiquetas",
      "name": "CaracteresEntreEtiquetas",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "LinhaRzSocial",
      "label": "LinhaRzSocial",
      "name": "LinhaRzSocial",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "LinhaContato",
      "label": "LinhaContato",
      "name": "LinhaContato",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "LinhaEndereco",
      "label": "LinhaEndereco",
      "name": "LinhaEndereco",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "LinhaBairro",
      "label": "LinhaBairro",
      "name": "LinhaBairro",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "LinhaCidade",
      "label": "LinhaCidade",
      "name": "LinhaCidade",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "LinhaCep",
      "label": "LinhaCep",
      "name": "LinhaCep",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "TipoImpressao",
      "label": "TipoImpressao",
      "name": "TipoImpressao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "AlturaLinha",
      "label": "AlturaLinha",
      "name": "AlturaLinha",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "LinhaCartaoFidelidade",
      "label": "LinhaCartaoFidelidade",
      "name": "LinhaCartaoFidelidade",
      "type": "int",
      "size": 2
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 20
    },
    {
      "field": "LinhaCartao",
      "label": "LinhaCartao",
      "name": "LinhaCartao",
      "type": "int",
      "size": 2
    },
    {
      "field": "QtdeLinhasUltima",
      "label": "QtdeLinhasUltima",
      "name": "QtdeLinhasUltima",
      "type": "int",
      "size": 4
    }
  ]
}
