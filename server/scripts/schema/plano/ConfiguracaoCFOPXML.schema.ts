import { TEntity } from "../../../../types";

export const ConfiguracaoCFOPXML: TEntity = {
  database: "plano",
  table: "ConfiguracaoCFOPXML",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CFOPOrigem",
      label: "CFOPOrigem",
      name: "CFOPOrigem",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CFOPDestino",
      label: "CFOPDestino",
      name: "CFOPDestino",
      type: "int",
      size: 5,
      allowNull: false,
    },
  ],
};
