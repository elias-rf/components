import { TTableDef } from "@/types/model";

export const Empresa: TTableDef = {
  database: "plano",
  table: "Empresa",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "Empresa_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "RzSocial",
      label: "RzSocial",
      name: "RzSocial",
      typeField: "string",
    },
    {
      field: "NmFantasia",
      label: "NmFantasia",
      name: "NmFantasia",
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
      field: "Cidade",
      label: "Cidade",
      name: "Cidade",
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
      field: "Cgc",
      label: "Cgc",
      name: "Cgc",
      typeField: "float",

      scale: 4,
    },
    {
      field: "InscEst",
      label: "InscEst",
      name: "InscEst",
      typeField: "string",
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",
    },
    {
      field: "Email",
      label: "Email",
      name: "Email",
      typeField: "string",
    },
    {
      field: "Site",
      label: "Site",
      name: "Site",
      typeField: "string",
    },
    {
      field: "Publicidade",
      label: "Publicidade",
      name: "Publicidade",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Despesas",
      label: "Despesas",
      name: "Despesas",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CustoFinanceiro",
      label: "CustoFinanceiro",
      name: "CustoFinanceiro",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Comissao",
      label: "Comissao",
      name: "Comissao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Diversos",
      label: "Diversos",
      name: "Diversos",
      typeField: "float",

      scale: 4,
    },
    {
      field: "RamoAtividade",
      label: "RamoAtividade",
      name: "RamoAtividade",
      typeField: "string",
    },
    {
      field: "PercImpostosIndiretos",
      label: "PercImpostosIndiretos",
      name: "PercImpostosIndiretos",
      typeField: "float",

      scale: 4,
    },
    {
      field: "EGMAAE",
      label: "EGMAAE",
      name: "EGMAAE",
      typeField: "string",
    },
    {
      field: "FgCRM",
      label: "FgCRM",
      name: "FgCRM",
      typeField: "string",
    },
    {
      field: "NmEmpresa",
      label: "NmEmpresa",
      name: "NmEmpresa",
      typeField: "string",
    },
    {
      field: "IdEmpresa",
      label: "IdEmpresa",
      name: "IdEmpresa",
      typeField: "int",
    },
    {
      field: "Limite",
      label: "Limite",
      name: "Limite",
      typeField: "string",
    },
  ],
};
