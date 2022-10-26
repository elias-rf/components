import React from "react";
import { twMerge } from "tailwind-merge";
import type { IEvent, Order, Schema, Where } from "../../../types";
import { pksFromSchema } from "../../../utils/schema/pks-from-schema";
import { ShowChevronIcon } from "../show-chevronIcon";
import { TableCell } from "./table-cell";
import { TableColumn } from "./table-column";
import { TableFilter } from "./table-filter";

type TTableProps = {
  name?: string;
  data?: any[];
  schema: Schema;
  selected?: string[];
  onSelect?: (event: IEvent) => void;
  orderBy?: Order[];
  onOrder?: (event: IEvent) => void;
  where?: Where[];
  onWhere?: (event: IEvent) => void;
  children?: React.ReactNode;
  selectedClassName?: string;
  tableClassName?: string;
};

/**
 * Componente Table
 */
export function Table(props: TTableProps) {
  const {
    name = "",
    data = [],
    schema,
    selected,
    orderBy,
    where,
    onWhere = () => null,
    onOrder,
    onSelect = () => null,
    children,
    selectedClassName = "bg-gray-300",
    tableClassName,
  } = props;

  let fields = schema ?? [];
  const pk = pksFromSchema(schema);
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
    if (selected === undefined) return false;
    const recId = pk.map((item) => record[item]);

    if (recId == null || selected == null) return false;
    if (recId.length !== selected.length) return false;
    for (let i = 0; i < recId.length; ++i) {
      if (recId[i] != selected[i]) return false;
    }
    return true;
  }

  /**
   * Seleciona um registro
   *
   * @param {object} recId chave primária do registro selecionado
   * @returns {void}
   */
  function handleOnSelect(rec: any) {
    if (isSelected(rec) && hasTree()) {
      onSelect({
        name,
        value: [],
        event: "onSelect",
        component: "Table",
      });
    } else {
      onSelect({
        name,
        value: pk.map((item) => rec[item]),
        event: "select",
        component: "Table",
      });
    }
  }

  return (
    <>
      {JSON.stringify(where)}
      <table className={twMerge("w-full", tableClassName)}>
        <thead>
          <tr>
            {hasTree() ? <th className="w-4"></th> : null}
            {fields?.map((fld) => (
              <TableColumn
                key={fld.name}
                schemaField={fld}
                onOrder={onOrder}
                orderBy={orderBy || []}
              />
            ))}
          </tr>
          <tr className="p-0 m-0">
            {where
              ? fields?.map((fld) => (
                  <TableFilter
                    key={fld.name}
                    schemaField={fld}
                    onWhere={onWhere}
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
                          isSelected(rec) ? selectedClassName : null
                        )}
                      >
                        <ShowChevronIcon opened={isSelected(rec)} />
                      </td>
                    ) : null}
                    {fields?.map((fld) => (
                      <TableCell
                        schemaField={fld}
                        selected={selected}
                        record={rec}
                        pk={pk}
                        selectedClassName={selectedClassName}
                        key={fld.field}
                      />
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
    </>
  );
}
