import { TEntity } from "@er/types/*";

export const CadVen: TEntity =
  {
  "database": "plano",
  "table": "CadVen",
  "fields": [
    {
      "field": "CdVendedor",
      "label": "CdVendedor",
      "name": "CadVen_id",
      "type": "float",
      "size": 8,
      "scale": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NmVendedor",
      "label": "NmVendedor",
      "name": "NmVendedor",
      "type": "string",
      "size": 70,
      "allowNull": false
    },
    {
      "field": "Endereco",
      "label": "Endereco",
      "name": "Endereco",
      "type": "string",
      "size": 70,
      "allowNull": false
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
      "field": "CPF",
      "label": "CPF",
      "name": "CPF",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Identidade",
      "label": "Identidade",
      "name": "Identidade",
      "type": "string",
      "size": 18,
      "allowNull": false
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "string",
      "size": 20
    },
    {
      "field": "FgControle",
      "label": "FgControle",
      "name": "FgControle",
      "type": "string",
      "size": 1
    },
    {
      "field": "Meta",
      "label": "Meta",
      "name": "Meta",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Venda",
      "label": "Venda",
      "name": "Venda",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ComissaoAV",
      "label": "ComissaoAV",
      "name": "ComissaoAV",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ComissaoPZ",
      "label": "ComissaoPZ",
      "name": "ComissaoPZ",
      "type": "float",
      "size": 8,
      "scale": 4
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
      "field": "Cargo",
      "label": "Cargo",
      "name": "Cargo",
      "type": "string",
      "size": 30
    },
    {
      "field": "PercLimiteComissao",
      "label": "PercLimiteComissao",
      "name": "PercLimiteComissao",
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
      "field": "Bairro",
      "label": "Bairro",
      "name": "Bairro",
      "type": "string",
      "size": 32
    },
    {
      "field": "TelefoneAdicional",
      "label": "TelefoneAdicional",
      "name": "TelefoneAdicional",
      "type": "string",
      "size": 32
    },
    {
      "field": "Email",
      "label": "Email",
      "name": "Email",
      "type": "string",
      "size": 128
    },
    {
      "field": "PercComissaoVarejoVista",
      "label": "PercComissaoVarejoVista",
      "name": "PercComissaoVarejoVista",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercComissaoAtacadoVista",
      "label": "PercComissaoAtacadoVista",
      "name": "PercComissaoAtacadoVista",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercComissaoVarejoPrazo",
      "label": "PercComissaoVarejoPrazo",
      "name": "PercComissaoVarejoPrazo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercComissaoAtacadoPrazo",
      "label": "PercComissaoAtacadoPrazo",
      "name": "PercComissaoAtacadoPrazo",
      "type": "float",
      "size": 8,
      "scale": 4
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
      "field": "NmFantasia",
      "label": "NmFantasia",
      "name": "NmFantasia",
      "type": "string",
      "size": 64
    },
    {
      "field": "FgFuncionarioOS",
      "label": "FgFuncionarioOS",
      "name": "FgFuncionarioOS",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgTecnicoOS",
      "label": "FgTecnicoOS",
      "name": "FgTecnicoOS",
      "type": "string",
      "size": 1
    }
  ]
}
