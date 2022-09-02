import { TEntity } from "@er/types/*";

export const fornecedor: TEntity = {
  database: "plano",
  table: "CadFor",
  fields: [
    {
      field: "CdFornecedor",
      label: "Cód",
      name: "fornecedor_id",
      primaryKey: true,
      type: "int",
      allowNull: false,
    },
    {
      field: "RzSocial",
      label: "Razão Social",
      name: "razao_social",
      type: "string",
      size: 70,
      allowNull: false,
    },
    {
      field: "NmFantasia",
      label: "Nome Fantasia",
      name: "nome_fantasia",
      type: "string",
      size: 64,
    },
    {
      field: "Cidade",
      label: "Cidade",
      name: "cidade",
      type: "string",
      size: 40,
    },
    {
      field: "Uf",
      label: "UF",
      name: "uf",
      type: "string",
      size: 2,
    },
    {
      field: "CdPais",
      label: "Cod País",
      name: "pais_id",
      type: "int",
      size: 5,
    },
    {
      field: "CGC",
      label: "CNPJ",
      name: "cnpj",
      type: "string",
    },
    {
      field: "InscEst",
      label: "Insc Estadual",
      name: "inscricao_estadual",
      type: "string",
      size: 16,
    },
    {
      field: "FgAtivo",
      label: "Ativo",
      name: "is_ativo",
      type: "string",
      size: 1,
    },
  ],
};
