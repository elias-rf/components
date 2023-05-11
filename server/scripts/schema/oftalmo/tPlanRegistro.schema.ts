import { TTableDef } from "@/types/model";

export const tPlanRegistro: TTableDef = {
  database: "oftalmo",
  table: "tPlanRegistro",
  fields: [
    {
      field: "kPlanRegistro",
      label: "kPlanRegistro",
      name: "tPlanRegistro_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkPlanComponente",
      label: "fkPlanComponente",
      name: "fkPlanComponente",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DataPrevista",
      label: "DataPrevista",
      name: "DataPrevista",
      typeField: "date",

      allowNull: false,
    },
    {
      field: "DataRealizada",
      label: "DataRealizada",
      name: "DataRealizada",
      typeField: "date",
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
    },
    {
      field: "Responsavel",
      label: "Responsavel",
      name: "Responsavel",
      typeField: "string",
    },
    {
      field: "Fabricante",
      label: "Fabricante",
      name: "Fabricante",
      typeField: "string",
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
    },
    {
      field: "NumeroSerie",
      label: "NumeroSerie",
      name: "NumeroSerie",
      typeField: "string",
    },
    {
      field: "Localizacao",
      label: "Localizacao",
      name: "Localizacao",
      typeField: "string",
    },
    {
      field: "FaixaUso",
      label: "FaixaUso",
      name: "FaixaUso",
      typeField: "string",
    },
    {
      field: "Resolucao",
      label: "Resolucao",
      name: "Resolucao",
      typeField: "string",
    },
    {
      field: "Exatidao",
      label: "Exatidao",
      name: "Exatidao",
      typeField: "string",
    },
    {
      field: "Valor",
      label: "Valor",
      name: "Valor",
      typeField: "string",
    },
    {
      field: "Tolerancia",
      label: "Tolerancia",
      name: "Tolerancia",
      typeField: "string",
    },
    {
      field: "EmpresaResponsavel",
      label: "EmpresaResponsavel",
      name: "EmpresaResponsavel",
      typeField: "string",
    },
    {
      field: "DataCalibracao",
      label: "DataCalibracao",
      name: "DataCalibracao",
      typeField: "date",
    },
    {
      field: "Notificado",
      label: "Notificado",
      name: "Notificado",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
  ],
};
