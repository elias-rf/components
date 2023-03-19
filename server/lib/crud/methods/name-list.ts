import { TTableDef } from "../../../../types/model";
import { namesFromTable } from "../../../../utils/schema/names-from-table";

export const nameList = (schema: TTableDef) => (): string[] => {
  return namesFromTable(schema);
};
