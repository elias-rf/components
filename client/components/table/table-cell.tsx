import { twMerge } from "tailwind-merge";
import { SchemaField } from "../../../types";

type TTableCell = {
  schemaField: SchemaField;
  selected?: string[];
  record: { [field: string]: any };
  pk: string[];
  selectedClassName?: string;
};

export function TableCell({
  schemaField,
  selected,
  pk,
  record,
  selectedClassName,
}: TTableCell) {
  /**
   * Verifica se há uma função de seleção nas propriedades
   *
   * @returns {boolean} True se o registro pode ser selecionado
   */
  function hasSelect() {
    return selected !== undefined;
  }

  /**
   * Verifica se o registro no argumento está selecionado
   *
   * @param {object} record registro para validar
   * @returns {boolean} True se o registro for selecionado
   */
  function isSelected(record: { [key: string]: any }) {
    if (!hasSelect()) return false;

    const recId = pk.map((item) => record[item]);

    if (recId == null || selected == null) return false;
    if (recId.length !== selected.length) return false;
    for (let i = 0; i < recId.length; ++i) {
      if (recId[i] != selected[i]) return false;
    }
    return true;
  }
  return (
    <td
      key={schemaField.field}
      className={twMerge(
        "px-2 border-b border-gray-300",
        schemaField.fieldClass,
        isSelected(record) ? selectedClassName : null
      )}
    >
      {record[schemaField.field]}
    </td>
  );
}
