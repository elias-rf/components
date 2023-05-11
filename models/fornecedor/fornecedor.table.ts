import { TTableDef } from "@/types";

export const fornecedor: TTableDef = {
  database: "plano",
  table: "CadFor",
  fields: [
    {
      field: "CdFornecedor",
      label: "Cód",
      name: "fornecedor_id",
      primaryKey: true,
      typeField: "int",
      allowNull: false,
    },
    {
      field: "RzSocial",
      label: "Razão Social",
      name: "razao_social",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NmFantasia",
      label: "Nome Fantasia",
      name: "nome_fantasia",
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
      field: "CdPais",
      label: "Cod País",
      name: "pais_id",
      typeField: "int",
    },
    {
      field: "CGC",
      label: "CNPJ",
      name: "cnpj",
      typeField: "string",
    },
    {
      field: "InscEst",
      label: "Insc Estadual",
      name: "inscricao_estadual",
      typeField: "string",
    },
    {
      field: "FgAtivo",
      label: "Ativo",
      name: "is_ativo",
      typeField: "string",
    },
  ],
};
