import type { Id, OrderBy, Schema, SchemaField, Where } from "@vt/types";
import { orderBy as orderByUtil } from "@vt/utils";
import React from "react";
import { twMerge } from "tailwind-merge";
import { whereUtil } from "../lib/http/where-util";
import { ShowChevronIcon } from "./show-chevronIcon";
import { ShowSortableIcon } from "./show-sortable-icon";
import { TextboxText, TextboxTextAction } from "./textbox-text";

export const tableActionTypes = {
  order: "ORDER",
  where: "WHERE",
  select: "SELECT",
};

export type TableAction =
  | { type: typeof tableActionTypes.select; payload: Id }
  | { type: typeof tableActionTypes.where; payload: Where[] }
  | { type: typeof tableActionTypes.order; payload: OrderBy[] };

interface TableProps {
  data?: any[];
  schema?: Schema;
  selected?: string[];
  orderBy?: OrderBy[];
  where?: Where[];
  dispatch?: (action: TableAction) => void;
  children?: React.ReactNode;
  selectedClassName?: string;
  tableClassName?: string;
}

function createWhere(where: Where[]) {
  return { type: tableActionTypes.where, payload: where };
}
function createOrder(order: OrderBy[]) {
  return { type: tableActionTypes.order, payload: order };
}

function createSelected(selected: string[]) {
  return { type: tableActionTypes.select, payload: selected };
}

/**
 * Componente Table
 */
export function Table({
  data = [],
  schema,
  selected,
  orderBy,
  where,
  dispatch = () => {},
  children,
  selectedClassName = "bg-gray-300",
  tableClassName,
}: TableProps) {
  let fields = schema?.fields ?? [];
  const pk = schema?.pk ?? [];
  fields = fields.filter((item) => item.visible !== false);

  /**
   * Verifica se foi passado um subcomponente para o Datatable
   *
   * @returns {boolean} True para apresentar
   */
  function hasTree() {
    return !!children;
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
    for (var i = 0; i < recId.length; ++i) {
      if (recId[i] != selected[i]) return false;
    }
    return true;
  }

  /**
   * Verifica se há uma função de seleção nas propriedades
   *
   * @returns {boolean} True se o registro pode ser selecionado
   */
  function hasSelect() {
    return selected !== undefined;
  }

  /**
   * Verifica se há uma função de filtro nas propriedades
   *
   * @returns {boolean} True se os dados podem ser filtrados
   */
  function hasWhere() {
    return where !== undefined;
  }

  /**
   * Verifica se há uma função de ordenação nas propriedades
   *
   * @returns {boolean} True se os dados podem ser ordenados
   */
  function hasOrderBy() {
    return orderBy !== undefined;
  }

  /**
   * Retorna o valor de um field em status.where
   *
   * @param {*} field
   * @return {*}
   */
  function getWhereValue(fieldName: string) {
    return whereUtil.getValue(where || [], fieldName);
  }

  /**
   *
   *
   * @param {*} status
   * @param {*} fieldSchema
   * @return {*}
   */
  function handleOrder(orderBy: OrderBy[] = [], fieldSchema: SchemaField) {
    if (hasOrderBy())
      dispatch(createOrder(orderByUtil.setUnique(orderBy, fieldSchema?.field)));
  }

  /**
   * Seleciona um registro
   *
   * @param {object} recId chave primária do registro selecionado
   * @returns {void}
   */
  function handleSelect(rec: any) {
    if (isSelected(rec) && hasTree()) {
      dispatch(createSelected([]));
    } else {
      dispatch(createSelected(pk.map((item) => rec[item])));
    }
  }

  /**
   * Filtra os registros
   */
  function handleWhere(action: TextboxTextAction) {
    let whr: Where[] = [];
    if (where) {
      whr = [...where];
    }
    whr = whereUtil.setUnique(whr, action.payload.field, action.payload.value);
    if (hasWhere()) {
      dispatch(createWhere(whr));
    }
  }

  const textbox = (
    <TextboxText
      field={""}
      value={""}
      dispatch={() => {}}
    />
  );

  return (
    <table className={twMerge("w-full", tableClassName)}>
      <thead>
        <tr>
          {hasTree() ? <th className="w-4"></th> : null}
          {fields?.map((fld) => (
            <th
              className={twMerge(
                "sticky top-0 p-1 border-b-1 border-gray-300 bg-gray-100",
                fld.labelClass,
                fld.sortable !== false && hasOrderBy() ? "cursor-pointer" : null
              )}
              key={fld.label}
              onClick={() => handleOrder(orderBy, fld)}
            >
              <div className="flex items-center">
                {fld.label}
                {hasOrderBy() ? (
                  <ShowSortableIcon
                    orderBy={orderBy || []}
                    fieldSchema={fld}
                  />
                ) : null}
              </div>
            </th>
          ))}
        </tr>
        <tr className="p-0 m-0">
          {hasWhere()
            ? fields?.map((fld) => (
                <th key={fld.label}>
                  {React.cloneElement(textbox, {
                    field: fld.field,
                    value: getWhereValue(fld.field),
                    key: fld.field,
                    className: "w-full border-2 border-gray-300 px-1",
                    dispatch: handleWhere,
                  })}
                </th>
              ))
            : null}
        </tr>
      </thead>
      <tbody>
        {Array.isArray(data)
          ? data?.map((rec) => (
              <React.Fragment key={pk.map((itemId) => rec[itemId]).join(":")}>
                <tr onClick={() => handleSelect(rec)}>
                  {hasTree() ? (
                    <td
                      className={twMerge(
                        isSelected(rec) ? selectedClassName : null
                      )}
                    >
                      <ShowChevronIcon opened={isSelected(rec)} />
                    </td>
                  ) : null}
                  {fields?.map((fld) => (
                    <td
                      key={fld.field}
                      className={twMerge(
                        "px-2 border-b border-gray-300",
                        fld.fieldClass,
                        isSelected(rec) ? selectedClassName : null
                      )}
                    >
                      {rec[fld.field]}
                    </td>
                  ))}
                </tr>
                {hasTree() && isSelected(rec) ? (
                  <tr>
                    <td></td>
                    <td colSpan={fields.length - 1}>{children}</td>
                  </tr>
                ) : null}
              </React.Fragment>
            ))
          : null}
      </tbody>
    </table>
  );
}
