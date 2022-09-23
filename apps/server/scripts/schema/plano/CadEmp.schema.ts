import { TEntity } from "@er/types/*";

export const CadEmp: TEntity =
  {
  "database": "plano",
  "table": "CadEmp",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "IdConversao",
      "label": "IdConversao",
      "name": "IdConversao",
      "type": "int",
      "size": 4
    },
    {
      "field": "Taxa14",
      "label": "Taxa14",
      "name": "Taxa14",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Taxa21",
      "label": "Taxa21",
      "name": "Taxa21",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Taxa28",
      "label": "Taxa28",
      "name": "Taxa28",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Taxa7",
      "label": "Taxa7",
      "name": "Taxa7",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "RzSocial",
      "label": "RzSocial",
      "name": "RzSocial",
      "type": "string",
      "size": 40
    },
    {
      "field": "Endereco",
      "label": "Endereco",
      "name": "Endereco",
      "type": "string",
      "size": 40
    },
    {
      "field": "Bairro",
      "label": "Bairro",
      "name": "Bairro",
      "type": "string",
      "size": 30
    },
    {
      "field": "Cidade",
      "label": "Cidade",
      "name": "Cidade",
      "type": "string",
      "size": 30
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
      "field": "CGC",
      "label": "CGC",
      "name": "CGC",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "InscEst",
      "label": "InscEst",
      "name": "InscEst",
      "type": "string",
      "size": 15
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "string",
      "size": 12
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
    }
  ]
}