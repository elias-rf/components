import type { TSelected } from "../../../types";
import { TFieldDef } from "../../../types/model";

export type TTableCell = {
  schemaField: TFieldDef;
  selected?: TSelected;
  record: { [field: string]: any };
  selectedClassName?: string;
};
