import { TTableDef } from "@/types/model";

export const CadEmp: TTableDef = {
  database: "plano",
  table: "CadEmp",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "IdConversao",
      label: "IdConversao",
      name: "IdConversao",
      typeField: "int",
    },
    {
      field: "Taxa14",
      label: "Taxa14",
      name: "Taxa14",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Taxa21",
      label: "Taxa21",
      name: "Taxa21",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Taxa28",
      label: "Taxa28",
      name: "Taxa28",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Taxa7",
      label: "Taxa7",
      name: "Taxa7",
      typeField: "float",

      scale: 4,
    },
    {
      field: "RzSocial",
      label: "RzSocial",
      name: "RzSocial",
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
      field: "CGC",
      label: "CGC",
      name: "CGC",
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
  ],
};
