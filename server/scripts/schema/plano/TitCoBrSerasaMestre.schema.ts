import { TTable } from "../../../../types/model";

export const TitCoBrSerasaMestre: TTable = {
  database: "plano",
  table: "TitCoBrSerasaMestre",
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
      field: "DtUltEnvio",
      label: "DtUltEnvio",
      name: "DtUltEnvio",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
