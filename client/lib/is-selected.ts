import { TSelected } from "@mono/types";
import { isEmpty } from "@mono/utils/identify/is_empty";
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
