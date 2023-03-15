import React from "react";
import { TUsuarioFields } from "../../../model/usuario/usuario.type";
import { TOrder, TSelected, TWhere } from "../../../types";
import { Page } from "../../components/page/page";
import { PageTitle } from "../../components/page/page_title";
import { TAgendaTelefoneList } from "../../features/agenda_telefone/agenda-telefone-list";
import { Auth } from "../../features/auth";
import { UsuarioForm } from "../../features/usuario/usuario_form";
import { UsuarioList } from "../../features/usuario/usuario_list";

export default function Usuarios() {
  const [selected, setSelected] = React.useState<TSelected>([]);
  const [where, setWhere] = React.useState<TWhere<TUsuarioFields>[]>([]);
  const [order, setOrder] = React.useState<TOrder<TUsuarioFields>[]>([]);

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

  return (
    <Auth>
      <Page>
        <PageTitle title="Cadastro de Usuários" />
        <hr />
        <div className={"flex flex-col gap-2"}>
          <UsuarioForm id={selected} />
          <UsuarioList
            selected={selected}
            where={where}
            order={order}
            onSelect={handle}
            onWhere={handle}
            onOrder={handle}
          />
        </div>
      </Page>
    </Auth>
  );
}
