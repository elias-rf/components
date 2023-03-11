import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TEvent } from "../../../types";
import { AgendaTelefoneList } from "./agenda-telefone-list";

const meta: Meta<typeof AgendaTelefoneList> = {
  component: AgendaTelefoneList,
};

export default meta;
type Story = StoryObj<typeof AgendaTelefoneList>;

const ListState = () => {
  const [selected, setSelected] = React.useState({});
  const [where, setWhere] = React.useState([]);
  const [order, setOrder] = React.useState([]);

  function handleSelected(e: TEvent) {
    setSelected(e.value);
  }
  function handleWhere(e: TEvent) {
    setWhere(e.value);
  }
  function handleOrder(e: TEvent) {
    setOrder(e.value);
  }

  return (
    <AgendaTelefoneList
      selected={selected}
      where={where}
      order={order}
      onSelectEvent={handleSelected}
      onWhereEvent={handleWhere}
      onOrderEvent={handleOrder}
    />
  );
};

export const List: Story = { render: () => <ListState /> };
