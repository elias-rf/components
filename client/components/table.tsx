import React from "react";
import { twMerge } from "tailwind-merge";
import type { Order, Schema, SchemaField, Where } from "../../types";
import { IEvent } from "../../types";
import { orderBy as orderByUtil } from "../../utils/src/order-by";
import { whereUtil } from "../lib/http/where-util";
import { ShowChevronIcon } from "./show-chevronIcon";
import { ShowSortableIcon } from "./show-sortable-icon";
import { TextboxText } from "./textbox-text";

interface ITableProps {
  name?: string;
  data?: any[];
  schema?: Schema;
  selected?: string[];
  order?: Order[];
  where?: Where[];
  onWhere?: (event: IEvent) => void;
  onOrder?: (event: IEvent) => void;
  onSelect?: (event: IEvent) => void;
  children?: React.ReactNode;
  selectedClassName?: string;
  tableClassName?: string;
}

/**
 * Componente Table
 */
export function Table(props: ITableProps) {
  const {
    name = "",
    data = [],
    schema,
    selected,
    order: orderBy,
    where,
    onWhere = () => null,
    onOrder = () => null,
    onSelect = () => null,
    children,
    selectedClassName = "bg-gray-300",
    tableClassName,
  } = props;

  const [whereAux, setWhereAux] = React.useState(where);

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
    for (let i = 0; i < recId.length; ++i) {
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
    return whereUtil.getValue(whereAux || [], fieldName);
  }

  /**
   *
   *
   * @param {*} status
   * @param {*} fieldSchema
   * @return {*}
   */
  function handleOrder(orderBy: Order[] = [], fieldSchema: SchemaField) {
    if (hasOrderBy() && fieldSchema.sortable !== false)
      onOrder({
        name,
        value: orderByUtil.setUnique(orderBy, fieldSchema?.field),
        eventName: "order",
        targetName: "Table",
        targetProps: props,
      });
  }

  /**
   * Seleciona um registro
   *
   * @param {object} recId chave primária do registro selecionado
   * @returns {void}
   */
  function handleSelect(rec: any) {
    if (isSelected(rec) && hasTree()) {
      onSelect({
        name,
        value: [],
        eventName: "select",
        targetName: "Table",
        targetProps: props,
      });
    } else {
      onSelect({
        name,
        value: pk.map((item) => rec[item]),
        eventName: "select",
        targetName: "Table",
        targetProps: props,
      });
    }
  }

  /**
   * Filtra os registros
   */
  function handleWhere(event: IEvent) {
    let whr: Where[] = [];
    if (whereAux) {
      whr = [...whereAux];
    }
    whr = whereUtil.setUnique(whr, event.name, event.value);
    setWhereAux(whr);
  }

  function handleWhereInput() {
    onWhere({
      name,
      value: whereAux,
      targetName: "Table",
      targetProps: props,
      eventName: "where",
    });
  }

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
                  <TextboxText
                    name={fld.field}
                    value={getWhereValue(fld.field)}
                    key={fld.field}
                    className={"w-full border-2 border-gray-300 px-1"}
                    onChange={handleWhere}
                    onInput={handleWhereInput}
                  />
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
