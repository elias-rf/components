import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ClienteList } from "./cliente_list";

const meta: Meta<typeof ClienteList> = {
  component: ClienteList,
};

export default meta;
type Story = StoryObj<typeof ClienteList>;

function ListState() {
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
    <ClienteList
      selected={selected}
      where={where}
      order={order}
      onSelect={handleSelected}
      onWhere={handleWhere}
      onOrder={handleOrder}
    />
  );
}

export const List: Story = {
  render: () => <ListState />,
};
