import { TTableDef } from "@/types/model";

export const ObsNota: TTableDef = {
  database: "plano",
  table: "ObsNota",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdTransp",
      label: "CdTransp",
      name: "CdTransp",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Especie",
      label: "Especie",
      name: "Especie",
      typeField: "string",
    },
    {
      field: "Frete",
      label: "Frete",
      name: "Frete",
      typeField: "string",
    },
    {
      field: "Informacoes",
      label: "Informacoes",
      name: "Informacoes",
      typeField: "string",
    },
    {
      field: "Informacoes2",
      label: "Informacoes2",
      name: "Informacoes2",
      typeField: "string",
    },
    {
      field: "Informacoes3",
      label: "Informacoes3",
      name: "Informacoes3",
      typeField: "string",
    },
    {
      field: "Informacoes4",
      label: "Informacoes4",
      name: "Informacoes4",
      typeField: "string",
    },
    {
      field: "Informacoes5",
      label: "Informacoes5",
      name: "Informacoes5",
      typeField: "string",
    },
    {
      field: "Marca",
      label: "Marca",
      name: "Marca",
      typeField: "string",
    },
    {
      field: "Numero",
      label: "Numero",
      name: "Numero",
      typeField: "string",
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "PlacaVeiculo",
      label: "PlacaVeiculo",
      name: "PlacaVeiculo",
      typeField: "string",
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "UfVeiculo",
      label: "UfVeiculo",
      name: "UfVeiculo",
      typeField: "string",
    },
    {
      field: "PesoBruto",
      label: "PesoBruto",
      name: "PesoBruto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PesoLiquido",
      label: "PesoLiquido",
      name: "PesoLiquido",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Informacoes6",
      label: "Informacoes6",
      name: "Informacoes6",
      typeField: "string",
    },
    {
      field: "Informacoes7",
      label: "Informacoes7",
      name: "Informacoes7",
      typeField: "string",
    },
    {
      field: "RNTC",
      label: "RNTC",
      name: "RNTC",
      typeField: "string",
    },
  ],
};
