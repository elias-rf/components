import { TTableDef } from "@/types/model";

export const SuporteAtividades: TTableDef = {
  database: "plano",
  table: "SuporteAtividades",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdTecnico",
      label: "CdTecnico",
      name: "CdTecnico",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtInicio",
      label: "DtInicio",
      name: "DtInicio",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtTermino",
      label: "DtTermino",
      name: "DtTermino",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "RzSocial",
      label: "RzSocial",
      name: "RzSocial",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NmContato",
      label: "NmContato",
      name: "NmContato",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumeroRat",
      label: "NumeroRat",
      name: "NumeroRat",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Funcao",
      label: "Funcao",
      name: "Funcao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgAtendimentoInterno",
      label: "FgAtendimentoInterno",
      name: "FgAtendimentoInterno",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DescricaoAtividade",
      label: "DescricaoAtividade",
      name: "DescricaoAtividade",
      typeField: "string",

      allowNull: false,
    },
  ],
};
