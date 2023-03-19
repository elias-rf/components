import { TTableDef } from "../../../../types/model";

export const ContratoAluguel: TTableDef = {
  database: "plano",
  table: "ContratoAluguel",
  fields: [
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
      field: "DiaContr",
      label: "DiaContr",
      name: "DiaContr",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlFranquia",
      label: "VlFranquia",
      name: "VlFranquia",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeFranquia",
      label: "QtdeFranquia",
      name: "QtdeFranquia",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlUnitExcedente",
      label: "VlUnitExcedente",
      name: "VlUnitExcedente",
      typeField: "float",
      size: 8,
      allowNull: false,
    },
  ],
};
