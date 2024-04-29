import { isEmpty } from '../utils/identify/is-empty.mjs'

/**
 * Verifica se o registro está selecionado
 */
export function isSelected(selected, record) {
  if (isEmpty(selected)) return false
  for (const fld in selected) {
    if (selected[fld] !== record[fld]) return false
  }
  return true
}
