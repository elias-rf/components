import type { TSelected } from "@mono/types";
import { TFieldDef } from "@mono/types/model";

export type TTableCell = {
  schemaField: TFieldDef;
  selected?: TSelected;
  record: { [field: string]: any };
  selectedClassName?: string;
};
