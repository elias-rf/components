import type { TGenericObject, TTableDef } from "@/types";
import { recordClear } from "../../schema/record-clear";

export const clearFactory = (table: TTableDef) => {
  const response = async (): Promise<TGenericObject> => {
    return recordClear(table.fields);
  };
  return response;
};
