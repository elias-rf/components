import { TTableDef } from "@mono/types/model";

export const ModeloImpBoleto: TTableDef = {
  database: "plano",
  table: "ModeloImpBoleto",
  fields: [
    {
      field: "IdModelo",
      label: "IdModelo",
      name: "ModeloImpBoleto_id",
      typeField: "string",
      size: 20,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "TamFormulario",
      label: "TamFormulario",
      name: "TamFormulario",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Densidade",
      label: "Densidade",
      name: "Densidade",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumLinhaNumDoc",
      label: "NumLinhaNumDoc",
      name: "NumLinhaNumDoc",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "EspacoEspecie",
      label: "EspacoEspecie",
      name: "EspacoEspecie",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumLinhaValDoc",
      label: "NumLinhaValDoc",
      name: "NumLinhaValDoc",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumLinhaCliente",
      label: "NumLinhaCliente",
      name: "NumLinhaCliente",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumLinhaDataVenc",
      label: "NumLinhaDataVenc",
      name: "NumLinhaDataVenc",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumLinhaInstrucao",
      label: "NumLinhaInstrucao",
      name: "NumLinhaInstrucao",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "TamLocal",
      label: "TamLocal",
      name: "TamLocal",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TamDataDoc",
      label: "TamDataDoc",
      name: "TamDataDoc",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TamBanco",
      label: "TamBanco",
      name: "TamBanco",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FgImpCdCliente",
      label: "FgImpCdCliente",
      name: "FgImpCdCliente",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgImpInscEst",
      label: "FgImpInscEst",
      name: "FgImpInscEst",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgImpMoraDiaria",
      label: "FgImpMoraDiaria",
      name: "FgImpMoraDiaria",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "EspecieDoc",
      label: "EspecieDoc",
      name: "EspecieDoc",
      typeField: "string",
      size: 20,
      allowNull: false,
    },
    {
      field: "LocalCobranca",
      label: "LocalCobranca",
      name: "LocalCobranca",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
    {
      field: "InstCobranca1",
      label: "InstCobranca1",
      name: "InstCobranca1",
      typeField: "string",
      size: 80,
      allowNull: false,
    },
    {
      field: "InstCobranca2",
      label: "InstCobranca2",
      name: "InstCobranca2",
      typeField: "string",
      size: 80,
      allowNull: false,
    },
    {
      field: "InstCobranca3",
      label: "InstCobranca3",
      name: "InstCobranca3",
      typeField: "string",
      size: 80,
      allowNull: false,
    },
    {
      field: "InstCobranca4",
      label: "InstCobranca4",
      name: "InstCobranca4",
      typeField: "string",
      size: 80,
      allowNull: false,
    },
    {
      field: "InstCobranca5",
      label: "InstCobranca5",
      name: "InstCobranca5",
      typeField: "string",
      size: 80,
      allowNull: false,
    },
  ],
};
