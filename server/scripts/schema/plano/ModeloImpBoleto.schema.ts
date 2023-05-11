import { TTableDef } from "@/types/model";

export const ModeloImpBoleto: TTableDef = {
  database: "plano",
  table: "ModeloImpBoleto",
  fields: [
    {
      field: "IdModelo",
      label: "IdModelo",
      name: "ModeloImpBoleto_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "TamFormulario",
      label: "TamFormulario",
      name: "TamFormulario",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Densidade",
      label: "Densidade",
      name: "Densidade",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumLinhaNumDoc",
      label: "NumLinhaNumDoc",
      name: "NumLinhaNumDoc",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "EspacoEspecie",
      label: "EspacoEspecie",
      name: "EspacoEspecie",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumLinhaValDoc",
      label: "NumLinhaValDoc",
      name: "NumLinhaValDoc",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumLinhaCliente",
      label: "NumLinhaCliente",
      name: "NumLinhaCliente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumLinhaDataVenc",
      label: "NumLinhaDataVenc",
      name: "NumLinhaDataVenc",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumLinhaInstrucao",
      label: "NumLinhaInstrucao",
      name: "NumLinhaInstrucao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "TamLocal",
      label: "TamLocal",
      name: "TamLocal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TamDataDoc",
      label: "TamDataDoc",
      name: "TamDataDoc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TamBanco",
      label: "TamBanco",
      name: "TamBanco",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgImpCdCliente",
      label: "FgImpCdCliente",
      name: "FgImpCdCliente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgImpInscEst",
      label: "FgImpInscEst",
      name: "FgImpInscEst",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgImpMoraDiaria",
      label: "FgImpMoraDiaria",
      name: "FgImpMoraDiaria",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "EspecieDoc",
      label: "EspecieDoc",
      name: "EspecieDoc",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "LocalCobranca",
      label: "LocalCobranca",
      name: "LocalCobranca",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "InstCobranca1",
      label: "InstCobranca1",
      name: "InstCobranca1",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "InstCobranca2",
      label: "InstCobranca2",
      name: "InstCobranca2",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "InstCobranca3",
      label: "InstCobranca3",
      name: "InstCobranca3",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "InstCobranca4",
      label: "InstCobranca4",
      name: "InstCobranca4",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "InstCobranca5",
      label: "InstCobranca5",
      name: "InstCobranca5",
      typeField: "string",

      allowNull: false,
    },
  ],
};
