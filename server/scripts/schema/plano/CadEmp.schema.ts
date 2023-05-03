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
      size: 4,
      allowNull: false,
    },
    {
      field: "IdConversao",
      label: "IdConversao",
      name: "IdConversao",
      typeField: "int",
      size: 4,
    },
    {
      field: "Taxa14",
      label: "Taxa14",
      name: "Taxa14",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Taxa21",
      label: "Taxa21",
      name: "Taxa21",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Taxa28",
      label: "Taxa28",
      name: "Taxa28",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Taxa7",
      label: "Taxa7",
      name: "Taxa7",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "RzSocial",
      label: "RzSocial",
      name: "RzSocial",
      typeField: "string",
      size: 40,
    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
      typeField: "string",
      size: 40,
    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      typeField: "string",
      size: 30,
    },
    {
      field: "Cidade",
      label: "Cidade",
      name: "Cidade",
      typeField: "string",
      size: 30,
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
      field: "CGC",
      label: "CGC",
      name: "CGC",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "InscEst",
      label: "InscEst",
      name: "InscEst",
      typeField: "string",
      size: 15,
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",
      size: 12,
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
  ],
};
