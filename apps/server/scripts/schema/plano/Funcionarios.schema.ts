import { TEntity } from "@er/types/*";

export const Funcionarios: TEntity =
  {
  "database": "plano",
  "table": "Funcionarios",
  "fields": [
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdFuncionario",
      "label": "CdFuncionario",
      "name": "CdFuncionario",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NmFuncionario",
      "label": "NmFuncionario",
      "name": "NmFuncionario",
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
      "field": "Cidade",
      "label": "Cidade",
      "name": "Cidade",
      "type": "string",
      "size": 30
    },
    {
      "field": "Bairro",
      "label": "Bairro",
      "name": "Bairro",
      "type": "string",
      "size": 20
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
      "field": "NumRg",
      "label": "NumRg",
      "name": "NumRg",
      "type": "string",
      "size": 15
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "string",
      "size": 15
    },
    {
      "field": "DtNasc",
      "label": "DtNasc",
      "name": "DtNasc",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "VlLimite",
      "label": "VlLimite",
      "name": "VlLimite",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgAtivo",
      "label": "FgAtivo",
      "name": "FgAtivo",
      "type": "string",
      "size": 1
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
      "field": "FgExibeLimite",
      "label": "FgExibeLimite",
      "name": "FgExibeLimite",
      "type": "string",
      "size": 1
    },
    {
      "field": "Classificacao",
      "label": "Classificacao",
      "name": "Classificacao",
      "type": "string",
      "size": 30
    },
    {
      "field": "FgSubsidio",
      "label": "FgSubsidio",
      "name": "FgSubsidio",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumAgencia",
      "label": "NumAgencia",
      "name": "NumAgencia",
      "type": "string",
      "size": 10
    },
    {
      "field": "NumConta",
      "label": "NumConta",
      "name": "NumConta",
      "type": "string",
      "size": 10
    },
    {
      "field": "NumDV",
      "label": "NumDV",
      "name": "NumDV",
      "type": "string",
      "size": 3
    }
  ]
}
