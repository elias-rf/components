import { TEntity } from "../../../../types";

export const TitCoBrSerasaMestre: TEntity = {
  database: "plano",
  table: "TitCoBrSerasaMestre",
  schema: [
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
      field: "DtUltEnvio",
      label: "DtUltEnvio",
      name: "DtUltEnvio",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
