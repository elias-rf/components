import { TEntity } from "@er/types/*";

export const Medicos: TEntity =
  {
  "database": "plano",
  "table": "Medicos",
  "fields": [
    {
      "field": "CRM",
      "label": "CRM",
      "name": "Medicos_id",
      "type": "string",
      "size": 16,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NmMedico",
      "label": "NmMedico",
      "name": "NmMedico",
      "type": "string",
      "size": 50
    },
    {
      "field": "Especialidade",
      "label": "Especialidade",
      "name": "Especialidade",
      "type": "string",
      "size": 30
    },
    {
      "field": "Regiao",
      "label": "Regiao",
      "name": "Regiao",
      "type": "string",
      "size": 40
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "string",
      "size": 20
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
      "field": "DtNascimento",
      "label": "DtNascimento",
      "name": "DtNascimento",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtNascimentoSecretaria",
      "label": "DtNascimentoSecretaria",
      "name": "DtNascimentoSecretaria",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Sexo",
      "label": "Sexo",
      "name": "Sexo",
      "type": "string",
      "size": 1
    },
    {
      "field": "Endereco",
      "label": "Endereco",
      "name": "Endereco",
      "type": "string",
      "size": 50
    },
    {
      "field": "Bairro",
      "label": "Bairro",
      "name": "Bairro",
      "type": "string",
      "size": 20
    },
    {
      "field": "CdCidade",
      "label": "CdCidade",
      "name": "CdCidade",
      "type": "int",
      "size": 4
    },
    {
      "field": "NmCidade",
      "label": "NmCidade",
      "name": "NmCidade",
      "type": "string",
      "size": 25
    },
    {
      "field": "Cep",
      "label": "Cep",
      "name": "Cep",
      "type": "int",
      "size": 4
    },
    {
      "field": "Uf",
      "label": "Uf",
      "name": "Uf",
      "type": "string",
      "size": 2
    },
    {
      "field": "Fax",
      "label": "Fax",
      "name": "Fax",
      "type": "string",
      "size": 20
    },
    {
      "field": "CdConsultor",
      "label": "CdConsultor",
      "name": "CdConsultor",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NmSecretaria",
      "label": "NmSecretaria",
      "name": "NmSecretaria",
      "type": "string",
      "size": 50
    },
    {
      "field": "DtVisita",
      "label": "DtVisita",
      "name": "DtVisita",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgAmiVida",
      "label": "FgAmiVida",
      "name": "FgAmiVida",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumEndereco",
      "label": "NumEndereco",
      "name": "NumEndereco",
      "type": "float",
      "size": 8
    },
    {
      "field": "Complemento",
      "label": "Complemento",
      "name": "Complemento",
      "type": "string",
      "size": 20
    },
    {
      "field": "TelefoneAdicional",
      "label": "TelefoneAdicional",
      "name": "TelefoneAdicional",
      "type": "string",
      "size": 20
    },
    {
      "field": "Email",
      "label": "Email",
      "name": "Email",
      "type": "string",
      "size": 50
    },
    {
      "field": "FgAtivo",
      "label": "FgAtivo",
      "name": "FgAtivo",
      "type": "string",
      "size": 1
    },
    {
      "field": "EspecialidadeAux",
      "label": "EspecialidadeAux",
      "name": "EspecialidadeAux",
      "type": "string",
      "size": 30
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
      "field": "FgCompoeDemandaIMS",
      "label": "FgCompoeDemandaIMS",
      "name": "FgCompoeDemandaIMS",
      "type": "string",
      "size": 1
    }
  ]
}
