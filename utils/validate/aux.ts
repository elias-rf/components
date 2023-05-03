import { TFieldDef } from "@/types/model";

export const entity: TFieldDef[] = [
  {
    name: "fld_1",
    field: "fld1",
    typeField: "int",
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  {
    name: "fld_2",
    field: "fld2",
    typeField: "string",
    allowNull: false,
    primaryKey: true,
  },
  {
    name: "fld_3",
    field: "fld3",
    typeField: "string",
    readOnly: true,
  },
  {
    name: "fld_4",
    field: "fld4",
    typeField: "string",
  },
];
