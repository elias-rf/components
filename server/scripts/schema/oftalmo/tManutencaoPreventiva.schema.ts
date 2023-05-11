import { TTableDef } from "@/types/model";

export const tManutencaoPreventiva: TTableDef = {
  database: "oftalmo",
  table: "tManutencaoPreventiva",
  fields: [
    {
      field: "kManutencaoPreventiva",
      label: "kManutencaoPreventiva",
      name: "tManutencaoPreventiva_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkMaquina",
      label: "fkMaquina",
      name: "fkMaquina",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DataManutencao",
      label: "DataManutencao",
      name: "DataManutencao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DataHoraInicio",
      label: "DataHoraInicio",
      name: "DataHoraInicio",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DataHoraFinal",
      label: "DataHoraFinal",
      name: "DataHoraFinal",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "MaterialUtilizadoItemProblema",
      label: "MaterialUtilizadoItemProblema",
      name: "MaterialUtilizadoItemProblema",
      typeField: "string",
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
    },
    {
      field: "ResponsavelManutencao",
      label: "ResponsavelManutencao",
      name: "ResponsavelManutencao",
      typeField: "string",
    },
    {
      field: "MotivoNaoConclusaoNoPrazo",
      label: "MotivoNaoConclusaoNoPrazo",
      name: "MotivoNaoConclusaoNoPrazo",
      typeField: "string",
    },
    {
      field: "UsuarioConclusao",
      label: "UsuarioConclusao",
      name: "UsuarioConclusao",
      typeField: "string",
    },
    {
      field: "LiberadoPor",
      label: "LiberadoPor",
      name: "LiberadoPor",
      typeField: "string",
    },
  ],
};
