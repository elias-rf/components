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
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "RzSocial",
      label: "RzSocial",
      name: "RzSocial",
      typeField: "string",
      size: 64,
    },
    {
      field: "NmFantasia",
      label: "NmFantasia",
      name: "NmFantasia",
      typeField: "string",
      size: 64,
    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
      typeField: "string",
      size: 64,
    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      typeField: "string",
      size: 32,
    },
    {
      field: "Cidade",
      label: "Cidade",
      name: "Cidade",
      typeField: "string",
      size: 32,
    },
    {
      field: "Uf",
      label: "Uf",
      name: "Uf",
      typeField: "string",
      size: 2,
    },
    {
      field: "Cep",
      label: "Cep",
      name: "Cep",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Cgc",
      label: "Cgc",
      name: "Cgc",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "InscEst",
      label: "InscEst",
      name: "InscEst",
      typeField: "string",
      size: 16,
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",
      size: 20,
    },
    {
      field: "Email",
      label: "Email",
      name: "Email",
      typeField: "string",
      size: 64,
    },
    {
      field: "Site",
      label: "Site",
      name: "Site",
      typeField: "string",
      size: 64,
    },
    {
      field: "Publicidade",
      label: "Publicidade",
      name: "Publicidade",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Despesas",
      label: "Despesas",
      name: "Despesas",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CustoFinanceiro",
      label: "CustoFinanceiro",
      name: "CustoFinanceiro",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Comissao",
      label: "Comissao",
      name: "Comissao",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Diversos",
      label: "Diversos",
      name: "Diversos",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "RamoAtividade",
      label: "RamoAtividade",
      name: "RamoAtividade",
      typeField: "string",
      size: 40,
    },
    {
      field: "PercImpostosIndiretos",
      label: "PercImpostosIndiretos",
      name: "PercImpostosIndiretos",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "EGMAAE",
      label: "EGMAAE",
      name: "EGMAAE",
      typeField: "string",
      size: 10,
    },
    {
      field: "FgCRM",
      label: "FgCRM",
      name: "FgCRM",
      typeField: "string",
      size: 1,
    },
    {
      field: "NmEmpresa",
      label: "NmEmpresa",
      name: "NmEmpresa",
      typeField: "string",
      size: 64,
    },
    {
      field: "IdEmpresa",
      label: "IdEmpresa",
      name: "IdEmpresa",
      typeField: "int",
      size: 2,
    },
    {
      field: "Limite",
      label: "Limite",
      name: "Limite",
      typeField: "string",
      size: 256,
    },
  ],
};
