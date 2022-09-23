import { TEntity } from "@er/types/*";

export const Empresa: TEntity =
  {
  "database": "plano",
  "table": "Empresa",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "Empresa_id",
      "type": "int",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "RzSocial",
      "label": "RzSocial",
      "name": "RzSocial",
      "type": "string",
      "size": 64
    },
    {
      "field": "NmFantasia",
      "label": "NmFantasia",
      "name": "NmFantasia",
      "type": "string",
      "size": 64
    },
    {
      "field": "Endereco",
      "label": "Endereco",
      "name": "Endereco",
      "type": "string",
      "size": 64
    },
    {
      "field": "Bairro",
      "label": "Bairro",
      "name": "Bairro",
      "type": "string",
      "size": 32
    },
    {
      "field": "Cidade",
      "label": "Cidade",
      "name": "Cidade",
      "type": "string",
      "size": 32
    },
    {
      "field": "Uf",
      "label": "Uf",
      "name": "Uf",
      "type": "string",
      "size": 2
    },
    {
      "field": "Cep",
      "label": "Cep",
      "name": "Cep",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Cgc",
      "label": "Cgc",
      "name": "Cgc",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "InscEst",
      "label": "InscEst",
      "name": "InscEst",
      "type": "string",
      "size": 16
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "string",
      "size": 20
    },
    {
      "field": "Email",
      "label": "Email",
      "name": "Email",
      "type": "string",
      "size": 64
    },
    {
      "field": "Site",
      "label": "Site",
      "name": "Site",
      "type": "string",
      "size": 64
    },
    {
      "field": "Publicidade",
      "label": "Publicidade",
      "name": "Publicidade",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Despesas",
      "label": "Despesas",
      "name": "Despesas",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CustoFinanceiro",
      "label": "CustoFinanceiro",
      "name": "CustoFinanceiro",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Comissao",
      "label": "Comissao",
      "name": "Comissao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Diversos",
      "label": "Diversos",
      "name": "Diversos",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "RamoAtividade",
      "label": "RamoAtividade",
      "name": "RamoAtividade",
      "type": "string",
      "size": 40
    },
    {
      "field": "PercImpostosIndiretos",
      "label": "PercImpostosIndiretos",
      "name": "PercImpostosIndiretos",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "EGMAAE",
      "label": "EGMAAE",
      "name": "EGMAAE",
      "type": "string",
      "size": 10
    },
    {
      "field": "FgCRM",
      "label": "FgCRM",
      "name": "FgCRM",
      "type": "string",
      "size": 1
    },
    {
      "field": "NmEmpresa",
      "label": "NmEmpresa",
      "name": "NmEmpresa",
      "type": "string",
      "size": 64
    },
    {
      "field": "IdEmpresa",
      "label": "IdEmpresa",
      "name": "IdEmpresa",
      "type": "int",
      "size": 2
    },
    {
      "field": "Limite",
      "label": "Limite",
      "name": "Limite",
      "type": "string",
      "size": 256
    }
  ]
}