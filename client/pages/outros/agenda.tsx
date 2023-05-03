import {
  TAgendaTelefoneFields,
  TAgendaTelefoneIds,
} from "@/models/agenda-telefone/agenda-telefone.type";
import { TOrder, TWhere } from "@/types";
import { Divider, Title } from "@mantine/core";
import React from "react";
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

  return (
    <>
      <Title order={3}>Agenda de Ramais</Title>
      <Divider my={4} />
      <AgendaTelefoneList
        selected={selected}
        where={where}
        order={order}
        onSelect={setSelected}
        onWhere={setWhere}
        onOrder={setOrder}
      >
        <AgendaTelefoneForm id={selected} />
      </AgendaTelefoneList>
    </>
  );
}
