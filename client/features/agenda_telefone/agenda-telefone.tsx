import { TAgendaTelefoneIds } from "@/models/agenda-telefone/agenda-telefone.type";
import { TOrder, TWhere } from "@/types";
import React from "react";

import { Page } from "../../components/page/page";
import { PageTitle } from "../../components/page/page_title";
import { AgendaTelefoneForm } from "./agenda-telefone-form";
import { AgendaTelefoneList } from "./agenda-telefone-list";

/**
 * Agenda de Ramais
 */
export function AgendaTelefone() {
  const [selected, setSelected] = React.useState<TAgendaTelefoneIds>({
    agenda_telefone_id: 0,
  });
  const [where, setWhere] = React.useState<TWhere[]>([]);
  const [order, setOrder] = React.useState<TOrder[]>([]);

  function handleSelect(event: any) {
    setSelected(event.value);
  }
  function handleWhere(event: any) {
    setWhere(event.value);
  }
  function handleOrder(event: any) {
    setOrder(event.value);
  }

  return (
    <Page>
      <PageTitle title="Agenda de Ramais" />
      <hr />
      <section className={"flex flex-col gap-2"}>
        <AgendaTelefoneList
          selected={selected}
          where={where}
          order={order}
          onSelect={handleSelect}
          onWhere={handleWhere}
          onOrder={handleOrder}
        >
          <AgendaTelefoneForm id={selected} />
        </AgendaTelefoneList>
      </section>
    </Page>
  );
}
