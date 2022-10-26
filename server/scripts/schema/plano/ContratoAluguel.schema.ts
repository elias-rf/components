import { TEntity } from "../../../../types";

export const ContratoAluguel: TEntity = {
  database: "plano",
  table: "ContratoAluguel",
  schema: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DiaContr",
      label: "DiaContr",
      name: "DiaContr",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlFranquia",
      label: "VlFranquia",
      name: "VlFranquia",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeFranquia",
      label: "QtdeFranquia",
      name: "QtdeFranquia",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlUnitExcedente",
      label: "VlUnitExcedente",
      name: "VlUnitExcedente",
      type: "float",
      size: 8,
      allowNull: false,
    },
  ],
};
