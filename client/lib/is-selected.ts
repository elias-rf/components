import { TSelected } from '@/types/index.js'
import { isEmpty } from '@/utils/identify/is-empty.js'
/**
 * Verifica se o registro está selecionado
 */
export function isSelected(
  selected: TSelected,
  record: { [key: string]: any }
) {
  if (isEmpty(selected)) return false
  for (const fld in selected) {
    if (selected[fld] !== record[fld]) return false
  }
  return true
}
