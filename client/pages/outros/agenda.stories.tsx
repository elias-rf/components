import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import Agenda from "./agenda";

const queryClient = new QueryClient();

export default {
  title: "Pages/Agenda",
  component: Agenda,
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
} as ComponentMeta<typeof Agenda>;

export const Default: ComponentStory<typeof Agenda> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading...</div>}>
        <Agenda />
      </Suspense>{" "}
    </QueryClientProvider>
  );
};
