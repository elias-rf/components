import React from "react";
import { TOrder, TSelected, TWhere } from "../../../types";
import { Page } from "../../components/page/page";
import { PageTitle } from "../../components/page/page_title";
import { TAgendaTelefoneListEvent } from "../../features/agenda_telefone/agenda_telefone_list";
import { Auth } from "../../features/auth";
import { GroupSubjectForm } from "../../features/permissoes/group_subject_form";
import { GroupSubjectList } from "../../features/permissoes/group_subject_list";

export default function Permissoes() {
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
    <Auth>
      <Page>
        <PageTitle title="Permissões" />
        <hr />{" "}
        <section className="flex flex-col gap-2">
          <GroupSubjectForm id={selected} />
          <GroupSubjectList
            selected={selected}
            where={where}
            order={order}
            onSelectEvent={handleEvent}
            onWhereEvent={handleEvent}
            onOrderEvent={handleEvent}
          />{" "}
        </section>
      </Page>
    </Auth>
  );
}
