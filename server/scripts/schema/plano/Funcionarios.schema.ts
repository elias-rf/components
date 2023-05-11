import { TTableDef } from "@/types/model";

export const Funcionarios: TTableDef = {
  database: "plano",
  table: "Funcionarios",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdFuncionario",
      label: "CdFuncionario",
      name: "CdFuncionario",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NmFuncionario",
      label: "NmFuncionario",
      name: "NmFuncionario",
      typeField: "string",
    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
      typeField: "string",
    },
    {
      field: "Cidade",
      label: "Cidade",
      name: "Cidade",
      typeField: "string",
    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      typeField: "string",
    },
    {
      field: "Uf",
      label: "Uf",
      name: "Uf",
      typeField: "string",
    },
    {
      field: "Cep",
      label: "Cep",
      name: "Cep",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumRg",
      label: "NumRg",
      name: "NumRg",
      typeField: "string",
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",
    },
    {
      field: "DtNasc",
      label: "DtNasc",
      name: "DtNasc",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "VlLimite",
      label: "VlLimite",
      name: "VlLimite",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
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
      field: "FgExibeLimite",
      label: "FgExibeLimite",
      name: "FgExibeLimite",
      typeField: "string",
    },
    {
      field: "Classificacao",
      label: "Classificacao",
      name: "Classificacao",
      typeField: "string",
    },
    {
      field: "FgSubsidio",
      label: "FgSubsidio",
      name: "FgSubsidio",
      typeField: "string",
    },
    {
      field: "NumAgencia",
      label: "NumAgencia",
      name: "NumAgencia",
      typeField: "string",
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "string",
    },
    {
      field: "NumDV",
      label: "NumDV",
      name: "NumDV",
      typeField: "string",
    },
  ],
};
