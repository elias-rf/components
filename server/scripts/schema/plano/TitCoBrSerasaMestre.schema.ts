import { TTableDef } from "@/types/model";

export const TitCoBrSerasaMestre: TTableDef = {
  database: "plano",
  table: "TitCoBrSerasaMestre",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtUltEnvio",
      label: "DtUltEnvio",
      name: "DtUltEnvio",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
