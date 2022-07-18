import type { Action, Id, OrderBy, Schema, Where } from "@vt/types";
import { Button, Form, Table } from "../../components";

type AuthUserProps = {
  schema: Schema;
  selected: Id;
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
export function AuthUser({
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
