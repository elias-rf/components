import { TTableDef } from "../../../../types/model";

export const SuporteAtividades: TTableDef = {
  database: "plano",
  table: "SuporteAtividades",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "CdTecnico",
      label: "CdTecnico",
      name: "CdTecnico",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DtInicio",
      label: "DtInicio",
      name: "DtInicio",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtTermino",
      label: "DtTermino",
      name: "DtTermino",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "RzSocial",
      label: "RzSocial",
      name: "RzSocial",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "NmContato",
      label: "NmContato",
      name: "NmContato",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "NumeroRat",
      label: "NumeroRat",
      name: "NumeroRat",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Funcao",
      label: "Funcao",
      name: "Funcao",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "FgAtendimentoInterno",
      label: "FgAtendimentoInterno",
      name: "FgAtendimentoInterno",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "DescricaoAtividade",
      label: "DescricaoAtividade",
      name: "DescricaoAtividade",
      typeField: "string",
      size: 2048,
      allowNull: false,
    },
  ],
};
