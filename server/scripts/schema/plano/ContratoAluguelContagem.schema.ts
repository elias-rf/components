import { TTableDef } from "@/types/model";

export const ContratoAluguelContagem: TTableDef = {
  database: "plano",
  table: "ContratoAluguelContagem",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DiaContr",
      label: "DiaContr",
      name: "DiaContr",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

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
      field: "DtContagem",
      label: "DtContagem",
      name: "DtContagem",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "ContagemAnterior",
      label: "ContagemAnterior",
      name: "ContagemAnterior",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ContagemAtual",
      label: "ContagemAtual",
      name: "ContagemAtual",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
