import { TTable } from "../../../../types/model";

export const ConfiguracaoCFOPXML: TTable = {
  database: "plano",
  table: "ConfiguracaoCFOPXML",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CFOPOrigem",
      label: "CFOPOrigem",
      name: "CFOPOrigem",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CFOPDestino",
      label: "CFOPDestino",
      name: "CFOPDestino",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
  ],
};
