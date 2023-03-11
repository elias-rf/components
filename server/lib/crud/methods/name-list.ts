import { TTable } from "../../../../types";
import { namesFromTable } from "../../../../utils/schema/names-from-table";

export const nameList = (schema: TTable) => (): string[] => {
  return namesFromTable(schema);
};
