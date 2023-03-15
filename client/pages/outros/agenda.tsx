import React from "react";
import {
  TAgendaTelefoneFields,
  TAgendaTelefoneIds,
  TAgendaTelefoneList,
} from "../../../model/agenda-telefone/agenda-telefone.type";
import { TOrder, TWhere } from "../../../types";
import { Page } from "../../components/page/page";
import { PageTitle } from "../../components/page/page_title";
import { AgendaTelefoneForm } from "../../features/agenda_telefone/agenda-telefone-form";
import { AgendaTelefoneList } from "../../features/agenda_telefone/agenda-telefone-list";

/**
 * Agenda de Ramais
 */
export default function Agenda() {
  const [selected, setSelected] = React.useState<TAgendaTelefoneIds>({
    agenda_telefone_id: 0,
  });
  const [where, setWhere] = React.useState<TWhere<TAgendaTelefoneFields>[]>([]);
  const [order, setOrder] = React.useState<TOrder<TAgendaTelefoneFields>[]>([]);

  function handle(event: TAgendaTelefoneList) {
    if (event.event === "onSelect") {
      setSelected(event.value);
    }
    if (event.event === "onWhere") {
      setWhere(event.value);
    }
    if (event.event === "onOrder") {
      setOrder(event.value);
    }
  }
  ("");
  return (
    <Page>
      <PageTitle title="Agenda de Ramais" />
      <hr />
      <section className={"flex flex-col gap-2"}>
        <AgendaTelefoneList
          selected={selected}
          where={where}
          order={order}
          onSelect={handle}
          onWhere={handle}
          onOrder={handle}
        >
          <AgendaTelefoneForm id={selected} />
        </AgendaTelefoneList>
      </section>
    </Page>
  );
}
