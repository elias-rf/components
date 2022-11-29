import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { Suspense } from "react";
import { TEvent } from "../../../types";
import { ClienteList } from "./cliente_list";

const queryClient = new QueryClient();

export default {
  title: "features/cliente",
  component: ClienteList,
  argTypes: {
    showOrderBy: { monitor: "order" },
    showSelected: { monitor: "selected" },
    showWhere: { monitor: "where" },
  },
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof ClienteList>;

export const List: ComponentStory<typeof ClienteList> = (props: any) => {
  const [selected, setSelected] = React.useState({});
  const [where, setWhere] = React.useState([]);
  const [order, setOrder] = React.useState([]);

  function handleSelected(e: TEvent) {
    props.showSelected(e.value);
    setSelected(e.value);
  }
  function handleWhere(e: TEvent) {
    props.showWhere(e.value);
    setWhere(e.value);
  }
  function handleOrder(e: TEvent) {
    props.showOrderBy(e.value);
    setOrder(e.value);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading...</div>}>
        <ClienteList
          selected={selected}
          where={where}
          order={order}
          onSelectEvent={handleSelected}
          onWhereEvent={handleWhere}
          onOrderEvent={handleOrder}
        />
      </Suspense>{" "}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
