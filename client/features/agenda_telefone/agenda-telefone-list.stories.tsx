import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TrpcProvider } from "../trpc-provider";
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
    <TrpcProvider>
      <AgendaTelefoneList
        selected={selected}
        where={where}
        order={order}
        onSelect={handleSelected}
        onWhere={handleWhere}
        onOrder={handleOrder}
      />
    </TrpcProvider>
  );
};

export const List: Story = { render: () => <ListState /> };
