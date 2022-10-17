import { TEntity } from "../../../../types";

export const CadCliEqptos: TEntity = {
  database: "plano",
  table: "CadCliEqptos",
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
      field: "CdMarcaEqpto",
      label: "CdMarcaEqpto",
      name: "CdMarcaEqpto",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdModeloEqpto",
      label: "CdModeloEqpto",
      name: "CdModeloEqpto",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      type: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
