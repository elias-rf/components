import { TEntity } from "@er/types/*";

export const NotaEnderecoEntrega: TEntity =
  {
  "database": "plano",
  "table": "NotaEnderecoEntrega",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
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
      "field": "Endereco",
      "label": "Endereco",
      "name": "Endereco",
      "type": "string",
      "size": 256,
      "allowNull": false
    },
    {
      "field": "Bairro",
      "label": "Bairro",
      "name": "Bairro",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "Cidade",
      "label": "Cidade",
      "name": "Cidade",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "UF",
      "label": "UF",
      "name": "UF",
      "type": "string",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CEP",
      "label": "CEP",
      "name": "CEP",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Proximidades",
      "label": "Proximidades",
      "name": "Proximidades",
      "type": "string",
      "size": 256,
      "allowNull": false
    },
    {
      "field": "Contato",
      "label": "Contato",
      "name": "Contato",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "NumEndereco",
      "label": "NumEndereco",
      "name": "NumEndereco",
      "type": "int",
      "size": 5
    },
    {
      "field": "CompEndereco",
      "label": "CompEndereco",
      "name": "CompEndereco",
      "type": "string",
      "size": 32
    },
    {
      "field": "FgTipoEndereco",
      "label": "FgTipoEndereco",
      "name": "FgTipoEndereco",
      "type": "string",
      "size": 1
    }
  ]
}
