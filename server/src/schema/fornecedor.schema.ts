import { TEntity } from "@er/types/*";

export const etiqueta_externa: TEntity = {
  database: "plano",
  table: "tbl_producao_etiqueta",
  fields: [
    {
      field: "CdFornecedor",
      label: "Cód",
      name: "fornecedor_id",
      primaryKey: true,
      type: "int",
    },
    {
      field: "RzSocial",
      label: "Razão Social",
      name: "razao_social",
      type: "string",
    },
    {
      field: "NmFantasia",
      label: "Nome Fantasia",
      name: "nome_fantasia",
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
      field: "CdPais",
      label: "Cod País",
      name: "pais_id",
      type: "string",
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
    },
    {
      field: "FgAtivo",
      label: "Ativo",
      name: "is_ativo",
      type: "boolean",
    },
  ],
};
