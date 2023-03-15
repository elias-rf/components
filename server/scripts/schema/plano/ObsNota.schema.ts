import { TTable } from "../../../../types/model";

export const ObsNota: TTable = {
  database: "plano",
  table: "ObsNota",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdTransp",
      label: "CdTransp",
      name: "CdTransp",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Especie",
      label: "Especie",
      name: "Especie",
      typeField: "string",
      size: 10,
    },
    {
      field: "Frete",
      label: "Frete",
      name: "Frete",
      typeField: "string",
      size: 1,
    },
    {
      field: "Informacoes",
      label: "Informacoes",
      name: "Informacoes",
      typeField: "string",
      size: 255,
    },
    {
      field: "Informacoes2",
      label: "Informacoes2",
      name: "Informacoes2",
      typeField: "string",
      size: 255,
    },
    {
      field: "Informacoes3",
      label: "Informacoes3",
      name: "Informacoes3",
      typeField: "string",
      size: 255,
    },
    {
      field: "Informacoes4",
      label: "Informacoes4",
      name: "Informacoes4",
      typeField: "string",
      size: 255,
    },
    {
      field: "Informacoes5",
      label: "Informacoes5",
      name: "Informacoes5",
      typeField: "string",
      size: 255,
    },
    {
      field: "Marca",
      label: "Marca",
      name: "Marca",
      typeField: "string",
      size: 10,
    },
    {
      field: "Numero",
      label: "Numero",
      name: "Numero",
      typeField: "string",
      size: 10,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "PlacaVeiculo",
      label: "PlacaVeiculo",
      name: "PlacaVeiculo",
      typeField: "string",
      size: 10,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "UfVeiculo",
      label: "UfVeiculo",
      name: "UfVeiculo",
      typeField: "string",
      size: 2,
    },
    {
      field: "PesoBruto",
      label: "PesoBruto",
      name: "PesoBruto",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PesoLiquido",
      label: "PesoLiquido",
      name: "PesoLiquido",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Informacoes6",
      label: "Informacoes6",
      name: "Informacoes6",
      typeField: "string",
      size: 255,
    },
    {
      field: "Informacoes7",
      label: "Informacoes7",
      name: "Informacoes7",
      typeField: "string",
      size: 255,
    },
    {
      field: "RNTC",
      label: "RNTC",
      name: "RNTC",
      typeField: "string",
      size: 20,
    },
  ],
};
