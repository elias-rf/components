import React from "react";
import { TOrder, TSelected, TWhere } from "../../../types";
import { Page } from "../../components/page/page";
import { PageTitle } from "../../components/page/page_title";
import { TAgendaTelefoneListEvent } from "../../features/agenda_telefone/agenda_telefone_list";
import { Auth } from "../../features/auth";
import { UsuarioForm } from "../../features/usuario/usuario_form";
import { UsuarioList } from "../../features/usuario/usuario_list";

export default function Usuarios() {
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
        <PageTitle title="Cadastro de Usuários" />
        <hr />
        <div className="flex flex-col gap-2">
          <UsuarioForm id={selected} />
          <UsuarioList
            selected={selected}
            where={where}
            order={order}
            onSelectEvent={handleEvent}
            onWhereEvent={handleEvent}
            onOrderEvent={handleEvent}
          />
        </div>
      </Page>
    </Auth>
  );
}
