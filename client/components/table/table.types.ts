import type { TSelected } from "../../../types";
import { TField } from "../../../types/model";

export type TTableCell = {
  schemaField: TField;
  selected?: TSelected;
  record: { [field: string]: any };
  selectedClassName?: string;
};
