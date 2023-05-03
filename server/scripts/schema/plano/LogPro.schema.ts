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
      size: 15,
      allowNull: false,
    },
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 4,
    },
    {
      field: "DtPromocaoFinal",
      label: "DtPromocaoFinal",
      name: "DtPromocaoFinal",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtPromocaoInicial",
      label: "DtPromocaoInicial",
      name: "DtPromocaoInicial",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "TipLog",
      label: "TipLog",
      name: "TipLog",
      typeField: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlValor",
      label: "VlValor",
      name: "VlValor",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};
