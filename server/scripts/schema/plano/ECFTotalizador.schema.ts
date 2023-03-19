import { TTableDef } from "../../../../types/model";

export const ECFTotalizador: TTableDef = {
  database: "plano",
  table: "ECFTotalizador",
  fields: [
    {
      field: "CNPJFilial",
      label: "CNPJFilial",
      name: "CNPJFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumECF",
      label: "NumECF",
      name: "NumECF",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Totalizador",
      label: "Totalizador",
      name: "Totalizador",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "Aliquota",
      label: "Aliquota",
      name: "Aliquota",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAcumulado",
      label: "VlAcumulado",
      name: "VlAcumulado",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "NumReducaoZ",
      label: "NumReducaoZ",
      name: "NumReducaoZ",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "NumUsuario",
      label: "NumUsuario",
      name: "NumUsuario",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "PosicaoTotalizador",
      label: "PosicaoTotalizador",
      name: "PosicaoTotalizador",
      typeField: "int",
      size: 2,
    },
    {
      field: "ControleFilial",
      label: "ControleFilial",
      name: "ControleFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ControleECF",
      label: "ControleECF",
      name: "ControleECF",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "ControleData",
      label: "ControleData",
      name: "ControleData",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "ControleTotalizador",
      label: "ControleTotalizador",
      name: "ControleTotalizador",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "ControleAliquota",
      label: "ControleAliquota",
      name: "ControleAliquota",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ControlePosicao",
      label: "ControlePosicao",
      name: "ControlePosicao",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
  ],
};
