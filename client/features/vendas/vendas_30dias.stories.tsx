import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { Vendas30dias } from "./vendas_30dias";

const queryClient = new QueryClient();

export default {
  title: "Features/Vendas30dias",
  component: Vendas30dias,
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
} as ComponentMeta<typeof Vendas30dias>;

export const List: ComponentStory<typeof Vendas30dias> = (props: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading...</div>}>
        <Vendas30dias />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
