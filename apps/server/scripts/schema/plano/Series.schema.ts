import { TEntity } from "@er/types/*";

export const Series: TEntity =
  {
  "database": "plano",
  "table": "Series",
  "fields": [
    {
      "field": "CdSerie",
      "label": "CdSerie",
      "name": "CdSerie",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "MensagemCupom",
      "label": "MensagemCupom",
      "name": "MensagemCupom",
      "type": "string",
      "size": 256
    },
    {
      "field": "MensagemReducao",
      "label": "MensagemReducao",
      "name": "MensagemReducao",
      "type": "string",
      "size": 256
    },
    {
      "field": "MensagemSubstituicao",
      "label": "MensagemSubstituicao",
      "name": "MensagemSubstituicao",
      "type": "string",
      "size": 256
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 256
    },
    {
      "field": "Observacao1",
      "label": "Observacao1",
      "name": "Observacao1",
      "type": "string",
      "size": 256
    },
    {
      "field": "Observacao2",
      "label": "Observacao2",
      "name": "Observacao2",
      "type": "string",
      "size": 256
    },
    {
      "field": "Observacao3",
      "label": "Observacao3",
      "name": "Observacao3",
      "type": "string",
      "size": 256
    },
    {
      "field": "Observacao4",
      "label": "Observacao4",
      "name": "Observacao4",
      "type": "string",
      "size": 256
    },
    {
      "field": "Produtos",
      "label": "Produtos",
      "name": "Produtos",
      "type": "string",
      "size": 256
    },
    {
      "field": "Servicos",
      "label": "Servicos",
      "name": "Servicos",
      "type": "string",
      "size": 256
    },
    {
      "field": "MensagemCorpo",
      "label": "MensagemCorpo",
      "name": "MensagemCorpo",
      "type": "string",
      "size": 512
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "FgAtivo",
      "label": "FgAtivo",
      "name": "FgAtivo",
      "type": "string",
      "size": 1
    },
    {
      "field": "MensagemInstitucionalNFCe",
      "label": "MensagemInstitucionalNFCe",
      "name": "MensagemInstitucionalNFCe",
      "type": "string",
      "size": 512
    },
    {
      "field": "FgCabecalho",
      "label": "FgCabecalho",
      "name": "FgCabecalho",
      "type": "string",
      "size": 1
    }
  ]
}