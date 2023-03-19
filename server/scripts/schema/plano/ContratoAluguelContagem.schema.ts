import { TTableDef } from "../../../../types/model";

export const ContratoAluguelContagem: TTableDef = {
  database: "plano",
  table: "ContratoAluguelContagem",
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
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",
      size: 20,
      allowNull: false,
    },
    {
      field: "DtContagem",
      label: "DtContagem",
      name: "DtContagem",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "ContagemAnterior",
      label: "ContagemAnterior",
      name: "ContagemAnterior",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ContagemAtual",
      label: "ContagemAtual",
      name: "ContagemAtual",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
