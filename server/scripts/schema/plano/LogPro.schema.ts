import { TTableDef } from "@/types/model";

export const LogPro: TTableDef = {
  database: "plano",
  table: "LogPro",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
    },
    {
      field: "DtPromocaoFinal",
      label: "DtPromocaoFinal",
      name: "DtPromocaoFinal",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtPromocaoInicial",
      label: "DtPromocaoInicial",
      name: "DtPromocaoInicial",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "TipLog",
      label: "TipLog",
      name: "TipLog",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlValor",
      label: "VlValor",
      name: "VlValor",
      typeField: "float",

      scale: 4,
    },
  ],
};
