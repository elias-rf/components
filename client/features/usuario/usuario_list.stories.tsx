import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { UsuarioList } from "./usuario_list";

const meta: Meta<typeof UsuarioList> = {
  component: UsuarioList,
};

export default meta;
type Story = StoryObj<typeof UsuarioList>;

const ListState = () => {
  const [selected, setSelected] = React.useState({});
  const [where, setWhere] = React.useState([]);
  const [order, setOrder] = React.useState([]);

  function handleSelected(e: any) {
    setSelected(e.value);
  }
  function handleWhere(e: any) {
    setWhere(e.value);
  }
  function handleOrder(e: any) {
    setOrder(e.value);
  }

  return (
    <UsuarioList
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
