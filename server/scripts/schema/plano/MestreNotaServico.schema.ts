import { TTable } from "../../../../types/model";

export const MestreNotaServico: TTable = {
  database: "plano",
  table: "MestreNotaServico",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
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
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "NaturezaOperacao",
      label: "NaturezaOperacao",
      name: "NaturezaOperacao",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoISS",
      label: "VlBaseCalculoISS",
      name: "VlBaseCalculoISS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaISS",
      label: "AliquotaISS",
      name: "AliquotaISS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlISS",
      label: "VlISS",
      name: "VlISS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoPIS",
      label: "VlBaseCalculoPIS",
      name: "VlBaseCalculoPIS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaPIS",
      label: "AliquotaPIS",
      name: "AliquotaPIS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPIS",
      label: "VlPIS",
      name: "VlPIS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoCofins",
      label: "VlBaseCalculoCofins",
      name: "VlBaseCalculoCofins",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaCofins",
      label: "AliquotaCofins",
      name: "AliquotaCofins",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCofins",
      label: "VlCofins",
      name: "VlCofins",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoINSS",
      label: "VlBaseCalculoINSS",
      name: "VlBaseCalculoINSS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaINSS",
      label: "AliquotaINSS",
      name: "AliquotaINSS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlINSS",
      label: "VlINSS",
      name: "VlINSS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoIR",
      label: "VlBaseCalculoIR",
      name: "VlBaseCalculoIR",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaIR",
      label: "AliquotaIR",
      name: "AliquotaIR",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIR",
      label: "VlIR",
      name: "VlIR",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoIN381",
      label: "VlBaseCalculoIN381",
      name: "VlBaseCalculoIN381",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaINS381",
      label: "AliquotaINS381",
      name: "AliquotaINS381",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIN381",
      label: "VlIN381",
      name: "VlIN381",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoCSLL",
      label: "VlBaseCalculoCSLL",
      name: "VlBaseCalculoCSLL",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaCSLL",
      label: "AliquotaCSLL",
      name: "AliquotaCSLL",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCSLL",
      label: "VlCSLL",
      name: "VlCSLL",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotalServicos",
      label: "VlTotalServicos",
      name: "VlTotalServicos",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotalLiquidoServicos",
      label: "VlTotalLiquidoServicos",
      name: "VlTotalLiquidoServicos",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
