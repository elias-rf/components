import { TColumn } from "@/client/components/table";

export const clienteColumns: TColumn[] = [
  {
    label: "Cód Cliente",
    name: "cliente_id",
  },
  {
    label: "Nome",
    name: "nome",
  },
  {
    label: "Cidade",
    name: "cidade",
  },
  {
    label: "UF",
    name: "uf",
  },
  {
    label: "CNPJ",
    name: "cnpj",
  },
  {
    label: "Cód Vendedor",
    name: "vendedor_id",
  },
  {
    label: "Habilitado",
    name: "eh_ativo",
  },
  {
    label: "Email",
    name: "email",
  },
  {
    label: "Identidade",
    name: "identidade",
  },
  {
    label: "Data de Cadastro",
    name: "data_cadastro",
  },
];
