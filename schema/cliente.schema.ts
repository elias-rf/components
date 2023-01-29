import { TTable } from "../types";

export const cliente: TTable = {
  database: "plano",
  table: "CadCli",
  fields: [
    {
      field: "CdCliente",
      label: "Cód Cliente",
      name: "cliente_id",
      primaryKey: true,
      type: "int",
    },
    {
      field: "RzSocial",
      label: "Nome",
      name: "nome",
      type: "string",
    },
    {
      field: "Cidade",
      label: "Cidade",
      name: "cidade",
      type: "string",
    },
    {
      field: "Uf",
      label: "UF",
      name: "uf",
      type: "string",
    },
    {
      field: "CGC",
      label: "CNPJ",
      name: "cnpj",
      type: "string",
    },
    {
      field: "CdVendedor",
      label: "Cód Vendedor",
      name: "vendedor_id",
      type: "string",
    },
    {
      field: "FgAtivo",
      label: "Habilitado",
      name: "is_ativo",
      type: "string",
    },
    {
      field: "EMail",
      label: "Email",
      name: "email",
      type: "string",
      allowNull: false,
    },
    {
      field: "NumIdentidade",
      label: "Identidade",
      name: "identidade",
      type: "string",
      allowNull: false,
    },
    {
      field: "DtCadastro",
      label: "Data de Cadastro",
      name: "data_cadastro",
      type: "string",
      allowNull: false,
    },
  ],
};
