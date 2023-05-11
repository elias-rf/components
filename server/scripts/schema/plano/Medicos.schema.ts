import { TTableDef } from "@/types/model";

export const Medicos: TTableDef = {
  database: "plano",
  table: "Medicos",
  fields: [
    {
      field: "CRM",
      label: "CRM",
      name: "Medicos_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmMedico",
      label: "NmMedico",
      name: "NmMedico",
      typeField: "string",
    },
    {
      field: "Especialidade",
      label: "Especialidade",
      name: "Especialidade",
      typeField: "string",
    },
    {
      field: "Regiao",
      label: "Regiao",
      name: "Regiao",
      typeField: "string",
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtNascimento",
      label: "DtNascimento",
      name: "DtNascimento",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtNascimentoSecretaria",
      label: "DtNascimentoSecretaria",
      name: "DtNascimentoSecretaria",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Sexo",
      label: "Sexo",
      name: "Sexo",
      typeField: "string",
    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
      typeField: "string",
    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      typeField: "string",
    },
    {
      field: "CdCidade",
      label: "CdCidade",
      name: "CdCidade",
      typeField: "int",
    },
    {
      field: "NmCidade",
      label: "NmCidade",
      name: "NmCidade",
      typeField: "string",
    },
    {
      field: "Cep",
      label: "Cep",
      name: "Cep",
      typeField: "int",
    },
    {
      field: "Uf",
      label: "Uf",
      name: "Uf",
      typeField: "string",
    },
    {
      field: "Fax",
      label: "Fax",
      name: "Fax",
      typeField: "string",
    },
    {
      field: "CdConsultor",
      label: "CdConsultor",
      name: "CdConsultor",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NmSecretaria",
      label: "NmSecretaria",
      name: "NmSecretaria",
      typeField: "string",
    },
    {
      field: "DtVisita",
      label: "DtVisita",
      name: "DtVisita",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgAmiVida",
      label: "FgAmiVida",
      name: "FgAmiVida",
      typeField: "string",
    },
    {
      field: "NumEndereco",
      label: "NumEndereco",
      name: "NumEndereco",
      typeField: "float",
    },
    {
      field: "Complemento",
      label: "Complemento",
      name: "Complemento",
      typeField: "string",
    },
    {
      field: "TelefoneAdicional",
      label: "TelefoneAdicional",
      name: "TelefoneAdicional",
      typeField: "string",
    },
    {
      field: "Email",
      label: "Email",
      name: "Email",
      typeField: "string",
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
    },
    {
      field: "EspecialidadeAux",
      label: "EspecialidadeAux",
      name: "EspecialidadeAux",
      typeField: "string",
    },
    {
      field: "CGC",
      label: "CGC",
      name: "CGC",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgCompoeDemandaIMS",
      label: "FgCompoeDemandaIMS",
      name: "FgCompoeDemandaIMS",
      typeField: "string",
    },
  ],
};
