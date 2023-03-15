import React from "react";
import { TAgendaTelefoneFields } from "../../../model/agenda-telefone/agenda-telefone.type";
import { stores } from "../../../model/stores";
import { TIds, TOrder, TWhere } from "../../../types";
import { Button } from "../../components/button";
import { DelDocIcon } from "../../components/icons/del-doc-icon";
import { NewDocIcon } from "../../components/icons/new-doc-icon";
import { PenIcon } from "../../components/icons/pen-icon";
import { Table } from "../../components/table/table";

type TAgendaTelefoneListProps = {
  selected: TIds;
  onSelect: (event: any) => void;
  where: TWhere<TAgendaTelefoneFields>[];
  onWhere: (event: any) => void;
  order: TOrder<TAgendaTelefoneFields>[];
  onOrder: (event: any) => void;
  children?: React.ReactNode;
};

const { getList, getSchema } = stores.agendaTelefoneStore.getState();

export function AgendaTelefoneList({
  selected,
  onSelect,
  where,
  onWhere,
  order,
  onOrder,
  children,
}: TAgendaTelefoneListProps) {
  const dataSchema = stores.agendaTelefoneStore((state) => state.dataSchema);
  const dataList = stores.agendaTelefoneStore((state) => state.dataList);
  const commands = {
    head() {
      return (
        <Button
          className={"inline-flex items-center"}
          onClick={() => console.log("novo")}
          size="extraSmall"
          color="light"
        >
          <NewDocIcon className={"mr-1"} /> Novo
        </Button>
      );
    },
    row({ record }: { record: any }) {
      return (
        <div className={"space-x-1"}>
          <Button
            className={""}
            onClick={(e) => {
              e.stopPropagation();
              console.log("edit", record);
            }}
            size="extraSmall"
            color="light"
          >
            <PenIcon />
          </Button>
          <Button
            className={""}
            onClick={(e) => {
              e.stopPropagation();
              console.log("del", record);
            }}
            size="extraSmall"
            color="light"
          >
            <DelDocIcon />
          </Button>
        </div>
      );
    },
  };

  React.useEffect(() => {
    getSchema();
  }, []);

  React.useEffect(() => {
    getList({ where, order });
  }, [where, order]);

  return (
    <>
      <Table
        schema={dataSchema}
        data={dataList}
        selected={selected}
        order={order}
        where={where}
        onSelect={onSelect}
        onWhere={onWhere}
        onOrder={onOrder}
        commands={commands}
      >
        {children}
      </Table>
    </>
  );
}
