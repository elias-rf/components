import { TSelection } from "@/types";
import type { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";
import React from "react";
import { AgendaTelefoneList } from "./agenda-telefone-list";

const meta: Meta<typeof AgendaTelefoneList> = {
  component: AgendaTelefoneList,
};

export default meta;
type Story = StoryObj<typeof AgendaTelefoneList>;

const ListState = () => {
  const [selection, setSelection] = React.useState<TSelection>([]);
  const [filter, setFilter] = React.useState({});
  const [sort, setSort] = React.useState({});

  function onSelection(e: any) {
    console.log(
      `🚀 ~ file: agenda-telefone-list.stories.tsx:20 ~ handleSelected ~ e: any:`,
      e
    );

    setSelection(e);
  }
  function onFilter(e: any) {
    console.log(
      `🚀 ~ file: agenda-telefone-list.stories.tsx:26 ~ handleWhere ~ e: any:`,
      e
    );

    setFilter(e);
  }
  function onSort(e: any) {
    console.log(
      `🚀 ~ file: agenda-telefone-list.stories.tsx:32 ~ handleOrder ~ e: any:`,
      e
    );

    setSort(e);
  }

  return (
    <>
      <AgendaTelefoneList
        selection={selection}
        filter={filter}
        sort={sort}
        onSelection={onSelection}
        onFilter={onFilter}
        onSort={onSort}
      />
      <JsonViewer
        value={{
          selection,
          sort,
          filter,
        }}
      />
    </>
  );
};

export const List: Story = { render: () => <ListState /> };
