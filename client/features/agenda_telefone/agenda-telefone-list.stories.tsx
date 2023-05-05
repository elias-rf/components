import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

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
    console.log(
      `🚀 ~ file: agenda-telefone-list.stories.tsx:20 ~ handleSelected ~ e: any:`,
      e
    );

    // setSelected(e);
  }
  function handleWhere(e: any) {
    console.log(
      `🚀 ~ file: agenda-telefone-list.stories.tsx:26 ~ handleWhere ~ e: any:`,
      e
    );

    // setWhere(e);
  }
  function handleOrder(e: any) {
    console.log(
      `🚀 ~ file: agenda-telefone-list.stories.tsx:32 ~ handleOrder ~ e: any:`,
      e
    );

    // setOrder(e);
  }

  return (
    <AgendaTelefoneList
      selected={selected}
      where={where}
      order={order}
      onSelect={handleSelected}
      onWhere={handleWhere}
      onOrder={handleOrder}
    />
  );
};

export const List: Story = { render: () => <ListState /> };
