import React from "react";
import { TOrder, TSelected, TWhere } from "../../../types";
import { Page } from "../../components/page/page";
import { PageTitle } from "../../components/page/page_title";
import { AgendaTelefoneForm } from "../../features/agenda_telefone/agenda_telefone_form";
import {
  AgendaTelefoneList,
  TAgendaTelefoneListEvent,
} from "../../features/agenda_telefone/agenda_telefone_list";

/**
 * Agenda de Ramais
 */
export default function Agenda() {
  const [selected, setSelected] = React.useState<TSelected>([]);
  const [where, setWhere] = React.useState<TWhere[]>([]);
  const [order, setOrder] = React.useState<TOrder[]>([]);

  function handleEvent(event: TAgendaTelefoneListEvent) {
    if (event.event === "onSelectEvent") {
      setSelected(event.value);
    }
    if (event.event === "onWhereEvent") {
      setWhere(event.value);
    }
    if (event.event === "onOrderEvent") {
      setOrder(event.value);
    }
  }

  return (
    <Page>
      <PageTitle title="Agenda de Ramais" />
      <hr />
      <section className="flex flex-col gap-2">
        <AgendaTelefoneForm id={selected} />
        <AgendaTelefoneList
          selected={selected}
          where={where}
          order={order}
          onSelectEvent={handleEvent}
          onWhereEvent={handleEvent}
          onOrderEvent={handleEvent}
        />
      </section>
    </Page>
  );
}
