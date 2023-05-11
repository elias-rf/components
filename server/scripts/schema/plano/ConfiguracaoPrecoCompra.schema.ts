import { TTableDef } from "@/types/model";

export const ConfiguracaoPrecoCompra: TTableDef = {
  database: "plano",
  table: "ConfiguracaoPrecoCompra",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "ConfiguracaoPrecoCompra_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "FgVlTabela",
      label: "FgVlTabela",
      name: "FgVlTabela",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgVlCusto",
      label: "FgVlCusto",
      name: "FgVlCusto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgVlAtacado",
      label: "FgVlAtacado",
      name: "FgVlAtacado",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgVlVarejo",
      label: "FgVlVarejo",
      name: "FgVlVarejo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgCalculoVlCusto",
      label: "FgCalculoVlCusto",
      name: "FgCalculoVlCusto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgLogPreco",
      label: "FgLogPreco",
      name: "FgLogPreco",
      typeField: "string",

      allowNull: false,
    },
  ],
};
