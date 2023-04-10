import React from "react";
import { twMerge } from "tailwind-merge";
import { TIds, TOrder, TWhere } from "../../../types";
import { TFieldDef } from "../../../types/model";
import { pksFromFieldsClient } from "../../../utils/schema/pks-from-fields";
import { isSelected } from "../../lib/is-selected";
import { ShowChevronIcon } from "../show_chevronIcon";
import { TableCell } from "./table-cell";
import { TableColumn } from "./table-column";
import { TableFilter } from "./table-filter";

export type TTableProps = {
  data?: any[];
  schema: TFieldDef[];
  selected?: TIds;
  onSelect?: (selected: TIds) => void;
  order?: TOrder[];
  onOrder?: (order: TOrder[]) => void;
  where?: TWhere[];
  onWhere?: (where: TWhere[]) => void;
  children?: React.ReactNode;
  selectedClassName?: string;
  tableClassName?: string;
  commands?: {
    head?: () => React.ReactNode;
    row?: (rec: any) => React.ReactNode;
  };
};

/**
 * Componente Table
 */
export function Table({
  data = [],
  schema,
  selected,
  order,
  where,
  onWhere = () => null,
  onOrder,
  onSelect = () => null,
  children,
  selectedClassName = "bg-gray-300",
  tableClassName,
  commands = {},
}: TTableProps) {
  let fields = schema ?? [];
  const pk = pksFromFieldsClient(schema);
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
      onSelect([]);
    } else {
      const value: any = {};
      for (const fld of pk) {
        value[fld] = rec[fld];
      }
      onSelect(value);
    }
  }

  function handleOnOrder({ value }: any) {
    console.log(`🚀 ~ file: table.tsx:80 ~ handleOnOrder ~ value:`, value);

    if (onOrder) onOrder(value);
  }

  function handleOnWhere({ value }: any) {
    onWhere(value);
  }

  return (
    <>
      <table className={twMerge("w-full", tableClassName)}>
        <thead>
          <tr>
            {hasTree() ? <th className={"w-4"}></th> : null}
            {fields?.map((fld) => (
              <TableColumn
                key={fld.name}
                schemaField={fld}
                onOrder={handleOnOrder}
                order={order || []}
              />
            ))}
            {commands?.head ? <th>{commands.head()}</th> : null}
          </tr>
          <tr className={"m-0 p-0"}>
            {hasTree() ? <th className={"w-4"}></th> : null}
            {where
              ? fields?.map((fld) => (
                  <TableFilter
                    key={fld.name}
                    schemaField={fld}
                    onWhere={handleOnWhere}
                    where={where}
                  ></TableFilter>
                ))
              : null}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data)
            ? data?.map((rec) => (
                <React.Fragment
                  key={pk.map((itemId: any) => rec[itemId]).join(":")}
                >
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
                    {commands?.row ? (
                      <td>{commands.row({ record: rec })}</td>
                    ) : null}
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
