import { TTableDef } from "@/types/model";

export const ECFTotalizador: TTableDef = {
  database: "plano",
  table: "ECFTotalizador",
  fields: [
    {
      field: "CNPJFilial",
      label: "CNPJFilial",
      name: "CNPJFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumECF",
      label: "NumECF",
      name: "NumECF",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Totalizador",
      label: "Totalizador",
      name: "Totalizador",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Aliquota",
      label: "Aliquota",
      name: "Aliquota",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAcumulado",
      label: "VlAcumulado",
      name: "VlAcumulado",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumReducaoZ",
      label: "NumReducaoZ",
      name: "NumReducaoZ",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumUsuario",
      label: "NumUsuario",
      name: "NumUsuario",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "PosicaoTotalizador",
      label: "PosicaoTotalizador",
      name: "PosicaoTotalizador",
      typeField: "int",
    },
    {
      field: "ControleFilial",
      label: "ControleFilial",
      name: "ControleFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ControleECF",
      label: "ControleECF",
      name: "ControleECF",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ControleData",
      label: "ControleData",
      name: "ControleData",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "ControleTotalizador",
      label: "ControleTotalizador",
      name: "ControleTotalizador",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ControleAliquota",
      label: "ControleAliquota",
      name: "ControleAliquota",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ControlePosicao",
      label: "ControlePosicao",
      name: "ControlePosicao",
      typeField: "int",

      allowNull: false,
    },
  ],
};
