import { TEntity } from "@er/types/*";

export const ConfiguracaoNFeSe: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoNFeSe",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "ConfiguracaoNFeSe_id",
      "type": "float",
      "size": 8,
      "scale": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "VersaoXML",
      "label": "VersaoXML",
      "name": "VersaoXML",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "Ambiente",
      "label": "Ambiente",
      "name": "Ambiente",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CaminhoNfeSe",
      "label": "CaminhoNfeSe",
      "name": "CaminhoNfeSe",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "CertificadoNfeSe",
      "label": "CertificadoNfeSe",
      "name": "CertificadoNfeSe",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "UsuarioNfeSe",
      "label": "UsuarioNfeSe",
      "name": "UsuarioNfeSe",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "SenhaNfeSe",
      "label": "SenhaNfeSe",
      "name": "SenhaNfeSe",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "ProxyNfeSe",
      "label": "ProxyNfeSe",
      "name": "ProxyNfeSe",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "LicencaNfeSe",
      "label": "LicencaNfeSe",
      "name": "LicencaNfeSe",
      "type": "string",
      "size": 512,
      "allowNull": false
    }
  ]
}