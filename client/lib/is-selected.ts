import { TSelected } from "@/types";
import { isEmpty } from "@/utils/identify/is_empty";
/**
 * Verifica se o registro está selecionado
 */
export function isSelected(
  selected: TSelected,
  record: { [key: string]: any }
) {
  if (isEmpty(selected)) return false;
  for (const fld in selected) {
    if (selected[fld] !== record[fld]) return false;
  }
  return true;
}
