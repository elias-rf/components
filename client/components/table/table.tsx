import React from "react";
import { twMerge } from "tailwind-merge";
import type { TEvent } from "../../../types";
import { pksFromFields } from "../../../utils/schema/pks-from-fields";
import { isSelected } from "../../lib/is-selected";
import { ShowChevronIcon } from "../show_chevronIcon";
import { TableCell } from "./table-cell";
import { TableColumn } from "./table-column";
import { TableFilter } from "./table-filter";
import { TTableProps } from "./table.types";

/**
 * Componente Table
 */
export function Table({
  name = "",
  data = [],
  schema,
  selected,
  order,
  where,
  onWhereEvent = () => null,
  onOrderEvent,
  onSelectEvent = () => null,
  children,
  selectedClassName = "bg-gray-300",
  tableClassName,
}: TTableProps) {
  let fields = schema ?? [];
  const pk = pksFromFields(schema);
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
   * Seleciona um registro
   *
   * @param {object} recId chave primária do registro selecionado
   * @returns {void}
   */
  function handleOnSelect(rec: any) {
    if (isSelected(selected || {}, rec) && hasTree()) {
      onSelectEvent({
        name,
        value: [],
        event: "onSelectEvent",
        component: "Table",
      });
    } else {
      const value: any = {};
      for (const fld of pk) {
        value[fld] = rec[fld];
      }
      onSelectEvent({
        name,
        value,
        event: "onSelectEvent",
        component: "Table",
      });
    }
  }

  function handleOnOrder({ value }: TEvent) {
    if (onOrderEvent)
      onOrderEvent({
        name,
        value,
        event: "onOrderEvent",
        component: "Table",
      });
  }

  function handleOnWhere({ value }: TEvent) {
    onWhereEvent({
      name,
      value,
      event: "onWhereEvent",
      component: "Table",
    });
  }

  return (
    <>
      <table className={twMerge("w-full", tableClassName)}>
        <thead>
          <tr>
            {hasTree() ? <th className="w-4"></th> : null}
            {fields?.map((fld) => (
              <TableColumn
                key={fld.name}
                schemaField={fld}
                onOrderEvent={handleOnOrder}
                order={order || []}
              />
            ))}
          </tr>
          <tr className="p-0 m-0">
            {where
              ? fields?.map((fld) => (
                  <TableFilter
                    key={fld.name}
                    schemaField={fld}
                    onWhereEvent={handleOnWhere}
                    where={where}
                  ></TableFilter>
                ))
              : null}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data)
            ? data?.map((rec) => (
                <React.Fragment key={pk.map((itemId) => rec[itemId]).join(":")}>
                  <tr onClick={() => handleOnSelect(rec)}>
                    {hasTree() ? (
                      <td
                        className={twMerge(
                          isSelected(selected || {}, rec)
                            ? selectedClassName
                            : null
                        )}
                      >
                        <ShowChevronIcon
                          opened={isSelected(selected || {}, rec)}
                        />
                      </td>
                    ) : null}
                    {fields?.map((fld) => (
                      <TableCell
                        schemaField={fld}
                        selected={selected}
                        record={rec}
                        selectedClassName={selectedClassName}
                        key={fld.name}
                      />
                    ))}
                  </tr>
                  {hasTree() && isSelected(selected || {}, rec) ? (
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
    </>
  );
}
