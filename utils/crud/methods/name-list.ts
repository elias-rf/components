import { TTableDef } from "@mono/types";
import { namesFromTable } from "../../schema/names-from-table";

export const nameList = (schema: TTableDef) => (): string[] => {
  return namesFromTable(schema);
};
