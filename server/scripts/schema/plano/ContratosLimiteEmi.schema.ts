import { TEntity } from "../../../../types";

export const ContratosLimiteEmi: TEntity = {
  database: "plano",
  table: "ContratosLimiteEmi",
  fields: [
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
      field: "DataLimite",
      label: "DataLimite",
      name: "DataLimite",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
