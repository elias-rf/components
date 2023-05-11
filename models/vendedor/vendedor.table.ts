import { TTableDef } from "@/types";

export const vendedor: TTableDef = {
  database: "plano",
  table: "CadVen",
  fields: [
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "vendedor_id",
      typeField: "float",

      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmVendedor",
      label: "NmVendedor",
      name: "vendedor",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "endereco",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Cidade",
      label: "Cidade",
      name: "cidade",
      typeField: "string",
    },
    {
      field: "Uf",
      label: "Uf",
      name: "uf",
      typeField: "string",
    },
    {
      field: "CPF",
      label: "CPF",
      name: "cpf",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Identidade",
      label: "Identidade",
      name: "identidade",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "telefone",
      typeField: "string",
    },
    {
      field: "FgControle",
      label: "FgControle",
      name: "eh_controle",
      typeField: "string",
    },
    {
      field: "Meta",
      label: "Meta",
      name: "meta",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Venda",
      label: "Venda",
      name: "venda",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ComissaoAV",
      label: "ComissaoAV",
      name: "ComissaoAV",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ComissaoPZ",
      label: "ComissaoPZ",
      name: "ComissaoPZ",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Cargo",
      label: "Cargo",
      name: "cargo",
      typeField: "string",
    },
    {
      field: "PercLimiteComissao",
      label: "PercLimiteComissao",
      name: "PercLimiteComissao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "eh_ativo",
      typeField: "string",
    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "bairro",
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
      name: "email",
      typeField: "string",
    },
    {
      field: "PercComissaoVarejoVista",
      label: "PercComissaoVarejoVista",
      name: "PercComissaoVarejoVista",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercComissaoAtacadoVista",
      label: "PercComissaoAtacadoVista",
      name: "PercComissaoAtacadoVista",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercComissaoVarejoPrazo",
      label: "PercComissaoVarejoPrazo",
      name: "PercComissaoVarejoPrazo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercComissaoAtacadoPrazo",
      label: "PercComissaoAtacadoPrazo",
      name: "PercComissaoAtacadoPrazo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Cep",
      label: "Cep",
      name: "cep",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NmFantasia",
      label: "NmFantasia",
      name: "NmFantasia",
      typeField: "string",
    },
    {
      field: "FgFuncionarioOS",
      label: "FgFuncionarioOS",
      name: "FgFuncionarioOS",
      typeField: "string",
    },
    {
      field: "FgTecnicoOS",
      label: "FgTecnicoOS",
      name: "FgTecnicoOS",
      typeField: "string",
    },
  ],
};
