import { TFieldDef } from "@/types";

export const clienteSchema: TFieldDef[] = [
  {
    field: "CdCliente",
    label: "Cód Cliente",
    name: "cliente_id",
    primaryKey: true,
    typeField: "int",
  },
  {
    field: "RzSocial",
    label: "Nome",
    name: "nome",
    typeField: "string",
  },
  {
    field: "Cidade",
    label: "Cidade",
    name: "cidade",
    typeField: "string",
  },
  {
    field: "Uf",
    label: "UF",
    name: "uf",
    typeField: "string",
  },
  {
    field: "CGC",
    label: "CNPJ",
    name: "cnpj",
    typeField: "string",
  },
  {
    field: "CdVendedor",
    label: "Cód Vendedor",
    name: "vendedor_id",
    typeField: "string",
  },
  {
    field: "FgAtivo",
    label: "Habilitado",
    name: "is_ativo",
    typeField: "string",
  },
  {
    field: "EMail",
    label: "Email",
    name: "email",
    typeField: "string",
    allowNull: false,
  },
  {
    field: "NumIdentidade",
    label: "Identidade",
    name: "identidade",
    typeField: "string",
    allowNull: false,
  },
  {
    field: "DtCadastro",
    label: "Data de Cadastro",
    name: "data_cadastro",
    typeField: "string",
    allowNull: false,
  },
];
