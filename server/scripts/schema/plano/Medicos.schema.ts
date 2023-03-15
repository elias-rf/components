import { TTable } from "../../../../types/model";

export const Medicos: TTable = {
  database: "plano",
  table: "Medicos",
  fields: [
    {
      field: "CRM",
      label: "CRM",
      name: "Medicos_id",
      typeField: "string",
      size: 16,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmMedico",
      label: "NmMedico",
      name: "NmMedico",
      typeField: "string",
      size: 50,
    },
    {
      field: "Especialidade",
      label: "Especialidade",
      name: "Especialidade",
      typeField: "string",
      size: 30,
    },
    {
      field: "Regiao",
      label: "Regiao",
      name: "Regiao",
      typeField: "string",
      size: 40,
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",
      size: 20,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtNascimento",
      label: "DtNascimento",
      name: "DtNascimento",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtNascimentoSecretaria",
      label: "DtNascimentoSecretaria",
      name: "DtNascimentoSecretaria",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Sexo",
      label: "Sexo",
      name: "Sexo",
      typeField: "string",
      size: 1,
    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
      typeField: "string",
      size: 50,
    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      typeField: "string",
      size: 20,
    },
    {
      field: "CdCidade",
      label: "CdCidade",
      name: "CdCidade",
      typeField: "int",
      size: 4,
    },
    {
      field: "NmCidade",
      label: "NmCidade",
      name: "NmCidade",
      typeField: "string",
      size: 25,
    },
    {
      field: "Cep",
      label: "Cep",
      name: "Cep",
      typeField: "int",
      size: 4,
    },
    {
      field: "Uf",
      label: "Uf",
      name: "Uf",
      typeField: "string",
      size: 2,
    },
    {
      field: "Fax",
      label: "Fax",
      name: "Fax",
      typeField: "string",
      size: 20,
    },
    {
      field: "CdConsultor",
      label: "CdConsultor",
      name: "CdConsultor",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NmSecretaria",
      label: "NmSecretaria",
      name: "NmSecretaria",
      typeField: "string",
      size: 50,
    },
    {
      field: "DtVisita",
      label: "DtVisita",
      name: "DtVisita",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "FgAmiVida",
      label: "FgAmiVida",
      name: "FgAmiVida",
      typeField: "string",
      size: 1,
    },
    {
      field: "NumEndereco",
      label: "NumEndereco",
      name: "NumEndereco",
      typeField: "float",
      size: 8,
    },
    {
      field: "Complemento",
      label: "Complemento",
      name: "Complemento",
      typeField: "string",
      size: 20,
    },
    {
      field: "TelefoneAdicional",
      label: "TelefoneAdicional",
      name: "TelefoneAdicional",
      typeField: "string",
      size: 20,
    },
    {
      field: "Email",
      label: "Email",
      name: "Email",
      typeField: "string",
      size: 50,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
      size: 1,
    },
    {
      field: "EspecialidadeAux",
      label: "EspecialidadeAux",
      name: "EspecialidadeAux",
      typeField: "string",
      size: 30,
    },
    {
      field: "CGC",
      label: "CGC",
      name: "CGC",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgCompoeDemandaIMS",
      label: "FgCompoeDemandaIMS",
      name: "FgCompoeDemandaIMS",
      typeField: "string",
      size: 1,
    },
  ],
};
