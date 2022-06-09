import React from "react";
import type { Action, OrderBy, Pks, Schema, Where } from "../../..";
import Button from "../ui/form/button";
import Form from "../ui/form/form";
import Table from "../ui/table/table";

type AuthUserProps = {
  schema: Schema;
  selected: Pks;
  orderBy: OrderBy[];
  where: Where[];
  status: string;
  list: any[];
  record: any;
  dispatch: (action: Action) => void;
};
/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
export default function AuthUser({
  schema,
  selected,
  orderBy,
  where,
  status,
  list,
  record,
  dispatch,
}: AuthUserProps) {
  return (
    <>
      <div className="mt-2">
        <div className="space-x-2">
          <Button
            className="w-20 bg-green-300"
            dispatch={dispatch}
            name="novo"
          >
            Novo
          </Button>
          <Button
            className="w-20 bg-blue-300"
            dispatch={dispatch}
            name="salvar"
            disabled={["view", "new"].includes(status)}
          >
            Salvar
          </Button>
          <Button
            className="w-20 bg-red-300"
            dispatch={dispatch}
            name="excluir"
            disabled={["new", "edit", "create"].includes(status)}
          >
            Excluir
          </Button>
        </div>
        <Form
          schema={schema}
          record={record}
          dispatch={dispatch}
        />
        <Table
          schema={schema}
          data={list}
          selected={selected}
          orderBy={orderBy}
          where={where}
          dispatch={dispatch}
        />
      </div>
    </>
  );
}
