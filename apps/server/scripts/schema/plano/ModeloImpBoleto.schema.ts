import { TEntity } from "@er/types/*";

export const ModeloImpBoleto: TEntity =
  {
  "database": "plano",
  "table": "ModeloImpBoleto",
  "fields": [
    {
      "field": "IdModelo",
      "label": "IdModelo",
      "name": "ModeloImpBoleto_id",
      "type": "string",
      "size": 20,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "TamFormulario",
      "label": "TamFormulario",
      "name": "TamFormulario",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Densidade",
      "label": "Densidade",
      "name": "Densidade",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumLinhaNumDoc",
      "label": "NumLinhaNumDoc",
      "name": "NumLinhaNumDoc",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "EspacoEspecie",
      "label": "EspacoEspecie",
      "name": "EspacoEspecie",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumLinhaValDoc",
      "label": "NumLinhaValDoc",
      "name": "NumLinhaValDoc",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumLinhaCliente",
      "label": "NumLinhaCliente",
      "name": "NumLinhaCliente",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumLinhaDataVenc",
      "label": "NumLinhaDataVenc",
      "name": "NumLinhaDataVenc",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumLinhaInstrucao",
      "label": "NumLinhaInstrucao",
      "name": "NumLinhaInstrucao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "TamLocal",
      "label": "TamLocal",
      "name": "TamLocal",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TamDataDoc",
      "label": "TamDataDoc",
      "name": "TamDataDoc",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TamBanco",
      "label": "TamBanco",
      "name": "TamBanco",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "FgImpCdCliente",
      "label": "FgImpCdCliente",
      "name": "FgImpCdCliente",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgImpInscEst",
      "label": "FgImpInscEst",
      "name": "FgImpInscEst",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgImpMoraDiaria",
      "label": "FgImpMoraDiaria",
      "name": "FgImpMoraDiaria",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "EspecieDoc",
      "label": "EspecieDoc",
      "name": "EspecieDoc",
      "type": "string",
      "size": 20,
      "allowNull": false
    },
    {
      "field": "LocalCobranca",
      "label": "LocalCobranca",
      "name": "LocalCobranca",
      "type": "string",
      "size": 40,
      "allowNull": false
    },
    {
      "field": "InstCobranca1",
      "label": "InstCobranca1",
      "name": "InstCobranca1",
      "type": "string",
      "size": 80,
      "allowNull": false
    },
    {
      "field": "InstCobranca2",
      "label": "InstCobranca2",
      "name": "InstCobranca2",
      "type": "string",
      "size": 80,
      "allowNull": false
    },
    {
      "field": "InstCobranca3",
      "label": "InstCobranca3",
      "name": "InstCobranca3",
      "type": "string",
      "size": 80,
      "allowNull": false
    },
    {
      "field": "InstCobranca4",
      "label": "InstCobranca4",
      "name": "InstCobranca4",
      "type": "string",
      "size": 80,
      "allowNull": false
    },
    {
      "field": "InstCobranca5",
      "label": "InstCobranca5",
      "name": "InstCobranca5",
      "type": "string",
      "size": 80,
      "allowNull": false
    }
  ]
}
