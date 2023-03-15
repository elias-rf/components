import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { GroupSubjectList } from "./group-subject-list";

const meta: Meta<typeof GroupSubjectList> = {
  component: GroupSubjectList,
};

export default meta;
type Story = StoryObj<typeof GroupSubjectList>;

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
    <GroupSubjectList
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
